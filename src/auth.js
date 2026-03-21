import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await prisma.Users.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          console.log("❌ Usuario no encontrado en la DB");
          return null;
        }

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isMatch) return null;

        return {
          id: user.id.toString(),
          name: `${user.name} ${user.lastName}`,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      console.log("SESSION FINAL:", session);
      return session;
    },
  },
  pages: {
    signIn: "/login", // Le decimos a NextAuth dónde está nuestro login
  },
});
