"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function registerSubject(dataForm) {
  try {
    const newSubject = await prisma.Subjects.create({
      data: {
        name: dataForm.name,
        code: dataForm.code,
        grade: dataForm.grade,
        area: dataForm.area,
      },
    });
    revalidatePath("/admin/materias");
    return { success: true, user: newSubject };
  } catch (error) {
    console.log("------ ERROR DECTECTADO ------");
    console.log("Código de error:", error.code);
    console.log("Mensaje:", error.message);
    if (error.code === "P2002") {
      return {
        success: false,
        error: `${dataForm.name} ya existe`,
      };
    }
    return {
      success: false,
      error: "Error inesperado al registrar la materia.",
    };
  }
}
