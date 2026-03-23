"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function assingAcademicLoand(fromData) {
  try {
    const teacherId = fromData.get("teacherId");
    const subjectId = fromData.get("subjectId");
    const sectionId = fromData.get("sectionId");

    const newLoand = await prisma.AcademicLoad.create({
      data: {
        period: "2026-2027",
        teacherId: Number(teacherId),
        subjectId: Number(subjectId),
        sectionId: Number(sectionId),
      },
    });

    revalidatePath("/dashboard/administradores/gestionMateria");
    return { success: true };
  } catch (error) {
    console.error("--- ERROR AL GUARDAR CARGA ---", error);
    return { success: false, error: "Error al conectar con la base de datos" };
  }
}
