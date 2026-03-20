"use server";
import prisma from "@/lib/prisma";

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
  }
}
