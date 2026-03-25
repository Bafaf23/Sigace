"use server";
import { prisma } from "@/lib/prisma";

/**
 * Registra una nueva sección en el plantel escolar.
 * Permite asignar opcionalmente un profesor guía y definir el turno.
 * @param {object} formData - Objeto con datos de la sección (grade, identifier, capacity, shift, teacherId).
 * @returns {Promise<{success: boolean, section?: Object, error?: string}>} Retorna la sección creada o un mensaje de error detallado (duplicados o docente inválido).
 */

export async function registerSection(formData) {
  try {
    const teacherId = formData.teacherId ? Number(formData.teacherId) : null;
    const newSection = await prisma.Section.create({
      data: {
        grade: formData.grade,
        identifier: formData.identifier,
        capacity: formData.capacity,
        shift: formData.shift || null,
        teacherId: teacherId,
      },
    });
    return { success: true, user: newSection };
  } catch (error) {
    console.log("--- ERROR DETECTADO EN SIGACE ---");
    console.log("Código de error:", error.code);
    console.log("Mensaje:", error.message);

    if (error.code === "P2002") {
      return {
        success: false,
        error: `La sección ${formData.grade} "${formData.identifier}" ya existe.`,
      };
    }
    // Error de clave foránea (Si el ID del profesor no existe)
    if (error.code === "P2003") {
      return {
        success: false,
        error: "El docente seleccionado no es válido o no existe.",
      };
    }
    console.log("---------------------------------");
    return { success: false, error: "al procesar el registro." };
  }
}
