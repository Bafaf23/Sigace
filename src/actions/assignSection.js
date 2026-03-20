"use server";
import prisma from "@/lib/prisma";

export async function assignSection(studentId, sectionId) {
  try {
    const section = await prisma.section.findUnique({
      where: { id: Number(sectionId) },
      include: { _count: { select: { students: true } } },
    });
    if (section._count.students >= section.capacity) {
      return {
        success: false,
        error: "La sección está llena (Capacidad máxima alcanzada).",
      };
    }
    await prisma.students.update({
      where: { id: Number(studentId) },
      data: {
        sectionId: Number(sectionId),
      },
    });
    return { success: true };
  } catch (error) {
    console.log("ERROR REAL DE PRISMA:", error.code, error.message);
    return { success: false, error: "No se pudo inscribir al alumno." };
  }
}
