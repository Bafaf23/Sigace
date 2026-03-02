import InfoCard from "@/components/atom/InfoCard";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function reportePage() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between rounded-xl p-3">
        <h1 className="text-3xl font-bold text-slate-500 uppercase">
          Imprimir Reportes
        </h1>
        <div className="flex items-center"></div>
      </div>
      <AccionesRapidas />
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        <InfoCard
          label={"Imprime la boleta individual de cada estudiante."}
          value={"Boleta Notas"}
          icon={faFile}
          colorClass={"text-orange-500 bg-orange-500/50"}
        />
        <InfoCard
          label={
            "Cuadro comparativo de todos los estudiantes y sus notas en las diferentes evaluaciones del periodo."
          }
          value={"S.C"}
          icon={faFile}
          colorClass={"text-green-500 bg-green-500/50"}
        />
        <InfoCard
          label={
            "Cronograma de actividades, fechas y criterios de evaluación que compartiste con los alumnos al inicio."
          }
          value={"P.E.L"}
          icon={faFile}
          colorClass={"text-indigo-500 bg-indigo-500/50"}
        />
      </div>
    </>
  );
}
