"use server";
import { prisma } from "@/lib/prisma";

/**
 *Obtiene el listado completo de materias registradas en el sistema.
 * Las materias se devuelven ordenadas jerárquicamente por grado y luego por nombre.
 *
 * @returns {Promise<Array<object>>}  Arreglo de objetos 'Subject' o un arreglo vacío en caso de error.
 */

export async function getSubject() {
  try {
    const subjects = await prisma.Subjects.findMany({
      orderBy: [{ grade: "asc" }, { name: "asc" }],
    });
    return Array.isArray(subjects) ? subjects : [];
  } catch (error) {
    console.error("--- ERROR AL OBTENER SECCIONES ---", error);
    return [];
  }
}
