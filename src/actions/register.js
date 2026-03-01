"use server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function register(datos) {
  try {
    const hashedPassword = await bcrypt.hash(datos.password, 10);

    const nuevo = await prisma.usuario.create({
      data: {
        dniUsuario: datos.dniUsuario,
        nombre: datos.name,
        apellido: datos.lastName,
        correo: datos.email,
        telefono: datos.phone,
        password: hashedPassword,
        rol: "Estudiante",
        fechaNacimiento: new Date(datos.birthdate),
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
        error: "La Cédula o el Correo ya están registrados.",
      };
    }
    return { success: false, error: "al procesar el registro." };
  }
}
