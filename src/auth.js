import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        // 1. Buscar al usuario en la DB de SIGACE
        const user = await prisma.usuario.findUnique({
          where: { correo: credentials.email },
        });

        if (!user) return null;

        // 2. Comparar contraseñas
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isMatch) return null;

        // 3. Si todo está bien, devolver el usuario
        return { id: user.id, name: user.nombre, email: user.correo };
      },
    }),
  ],
  pages: {
    signIn: "/login", // Le decimos a NextAuth dónde está nuestro login
  },
});
