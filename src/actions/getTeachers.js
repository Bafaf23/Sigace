"use server";
import prisma from "@/lib/prisma";

/**
 * Obtiene el listado de profesores registrados en el sistema los formatea para componentes de selección.
 * Realiza un join con la tabla de usuarios para obtener el nombre completo.
 *
 * @returns {Promise<Array<object>>}
 * Arreglo de objetos con el ID (como string) y el nombre completo del docente.
 */
export async function getTeachers() {
  try {
    const teachers = await prisma.Teachers.findMany({
      include: {
        user: true,
      },
    });
    return teachers.map((t) => ({
      value: t.id.toString(),
      label: `${t.user.name} ${t.user.lastName}`,
    }));
  } catch (error) {
    console.error("--- ERROR AL TRAER DOCENTES ---", error);
    return [];
  }
}
