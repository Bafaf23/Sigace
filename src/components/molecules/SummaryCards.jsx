"use client";
import InfoCard from "@/components/atom/InfoCard";
import {
  faExclamationTriangle,
  faCheckCircle,
  faUsers,
  faUser,
  faClock,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Icon from "../atom/Icon";

/**
 * Tarjetas de informacion del profesor para el profesor.
 * Esta tarjetas mustras data relavante para el profesor, como cantidad de secciones, total de estudiantes,etc
 *
 * @componet
 * @param {string} teachersId
 * @returns {JSX.Element}
 */

export default function SummaryCards({ teachersId }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="flex items-center justify-center p-3 mt-5">
        <div className="w-full rounded-2xl border border-dashed border-slate-500 bg-slate-100 p-5 text-center text-slate-400 dark:border-slate-600 dark:bg-slate-600 flex flex-col items-center justify-center gap-2">
          <Icon icon={faBook} className="text-4xl text-slate-400" />
          <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200">
            No hay información que mostrar
          </h3>
          <p className="text-sm text-slate-400">
            Parece que aún no se han creado información en este año escolar.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-5 p-3">
      <h2 className="mb-3 text-xl font-bold text-gray-500/70 uppercase dark:text-slate-400">
        Resumen
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        <InfoCard
          label={"Secciones"}
          value={data?.totalSecciones ?? 0}
          icon={faUser}
          colorClass={"bg-orange-500/40 text-orange-500"}
          description={"Secciones asignadas al profesor"}
        />

        <InfoCard
          label="Notas Cargadas"
          value={data?.notasCargadas ?? 0}
          icon={faCheckCircle}
          colorClass="bg-green-500/40 text-green-500"
          description={`89% del trimestre listo`}
        />

        <InfoCard
          label="Total Estudiantes"
          value={data?.totalEstudiantes}
          icon={faUsers}
          colorClass="bg-blue-500/40 text-blue-500"
          description="Inscritos en la sección"
        />
        <InfoCard
          label="Promedio Grupal"
          value={data?.promedio}
          icon={faExclamationTriangle}
          colorClass="bg-indigo-500/40 text-indigo-500"
          description="Rendimiento actual"
        />

        <InfoCard
          label="Pendientes"
          value={data?.pendientes}
          icon={faClock}
          colorClass="bg-amber-500/40 text-orange-500"
          description="Faltan por procesar"
        />
      </div>
    </section>
  );
}
