"use server";
import { prisma } from "@/lib/prisma";

export async function getSubject() {
  try {
    const subjects = await prisma.Subjects.findMany({
      orderBy: [{ grade: "asc" }, { name: "asc" }],
    });
    return Array.isArray(subjects) ? subjects : [];
  } catch (error) {
    console.error("--- ERROR AL OBTENER SECCIONES ---", error);
    return { success: false, error: "No se pudieron cargar las secciones." };
  }
}
