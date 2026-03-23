"use server";
import { prisma } from "@/lib/prisma";

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
