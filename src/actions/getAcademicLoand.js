"use server";
import { prisma } from "@/lib/prisma";

/**
 * Obtiene el listado completo de la carga académica con sus relaciones.
 * Incluye datos de materia, sección y la información de usuario del profesor.
 *
 * @returns {Promise<Array<object>>} Arreglo de objetos AcademicLoad con relaciones incluidas.
 */
export async function getAcademicLoand() {
  try {
    const academicLoand = await prisma.AcademicLoad.findMany({
      include: {
        subject: true,
        teacher: {
          include: {
            user: true,
          },
        },
        section: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    return academicLoand;
  } catch (error) {
    console.error("--- ERROR AL OBTENER CARGAS ---", error);
    return [];
  }
}
