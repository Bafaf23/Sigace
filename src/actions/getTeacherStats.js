"use server";
import prisma from "@/lib/prisma";

export async function getTeachersStats(teachersId) {
  const idNumerico = Number(teachersId);
  if (isNaN(idNumerico)) return null;

  try {
    const teachersStats = await prisma.Teachers.findUnique({
      where: { id: idNumerico },
      include: {
        _count: {
          select: {
            evaluationPlan: true,
          },
        },

        loads: {
          include: {
            section: {
              include: {
                _count: {
                  select: { students: true },
                },
              },
            },
          },
        },
      },
    });

    if (!teachersStats) return null;

    const idsSeccionesUnicas = new Set();
    let totalEstudiantes = 0;

    teachersStats.loads?.forEach((load) => {
      if (load.section) {
        if (!idsSeccionesUnicas.has(load.section.id)) {
          totalEstudiantes += load.section._count?.students || 0;
          idsSeccionesUnicas.add(load.section.id);
        }
      }
    });

    return {
      totalSecciones: idsSeccionesUnicas.size,
      totalEstudiantes: totalEstudiantes,
      pendientes: teachersStats._count?.evaluationPlan || 0,
      promedio: 0,
      notasCargadas: 0,
    };
  } catch (error) {
    console.log("------ ERROR EN SIGACE ------");
    console.log("Mensaje:", error.message);
    return null;
  }
}
