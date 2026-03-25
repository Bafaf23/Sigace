"use server";
import prisma from "@/lib/prisma";

/**
 * Obtiene todas las secciones con su profesor guía (y sus datos de usuario)
 * y el conteo total de estudiantes inscritos.
 *
 * @returns {Promise<{success: boolean, data?: Array<object>, error?: string}>}
 */
export async function getSection() {
  try {
    const sections = await prisma.section.findMany({
      include: {
        teacher: {
          include: {
            user: true,
          },
        },
        _count: {
          select: {
            students: true,
          },
        },
      },

      orderBy: {
        grade: "asc", // Las ordenamos por año para que se vea organizado
      },
    });
    return { success: true, data: sections };
  } catch (error) {
    console.error("--- ERROR AL OBTENER SECCIONES ---", error);
    return { success: false, error: "No se pudieron cargar las secciones." };
  }
}

/**
 * Obtiene el listado de estudiantes que aún no han sido asignados a ninguna sección.
 * Útil para procesos de inscripción y reubicación.
 * * @returns {Promise<{success: boolean, data?: Array<object>, error?: string}>}
 */
export async function getStudentsWithoutSection() {
  try {
    const students = await prisma.students.findMany({
      where: {
        sectionId: null,
      },
      include: {
        user: true,
      },
      orderBy: {
        user: {
          lastName: "asc",
        },
      },
    });
    console.log("Alumnos encontrados:", students.length);
    return { success: true, data: students };
  } catch (error) {
    console.error("--- ERROR AL OBTENER ALUMNOS HUÉRFANOS ---", error);
    return {
      success: false,
      error: "No se pudo obtener la lista de alumnos disponibles.",
    };
  }
}
