"use server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function register(datos) {
  try {
    const hashedPassword = await bcrypt.hash(datos.password, 10);
    const userRole = "TEACHER";

    const nuevo = await prisma.Users.create({
      data: {
        dni: datos.dni,
        name: datos.name,
        lastName: datos.lastName,
        email: datos.email,
        phone: datos.phone,
        password: hashedPassword,
        role: userRole,
        birthdate: new Date(datos.birthdate),
        createdAt: new Date(),

        teachers:
          userRole === "TEACHER"
            ? {
                create: {
                  school: {
                    connect: { id: datos.idSchool || 1 },
                  },
                },
              }
            : undefined,
      },
    });

    return { success: true, user: nuevo };
  } catch (error) {
    console.log("--- ERROR DETECTADO EN SIGACE ---");
    console.log("Código de error:", error.code);
    console.log("Mensaje:", error.message);
    console.log("---------------------------------");
    if (error.code === "P2002") {
      console.error("DETALLE DEL ERROR EN SIGACE:", error);
      return {
        success: false,
        error: "El Usuario ya esta registrado.",
      };
    }
    return { success: false, error: "al procesar el registro." };
  }
}
