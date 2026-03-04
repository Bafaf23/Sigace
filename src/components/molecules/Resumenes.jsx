import InfoCard from "@/components/atom/InfoCard";
import {
  faExclamationTriangle,
  faCheckCircle,
  faUsers,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function Resumenes() {
  return (
    <section className="mt-5 p-3">
      <h2 className="mb-3 text-xl font-bold text-gray-500/70 uppercase">
        Resumen
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        <InfoCard
          label={"Secciones"}
          value={"1"}
          icon={faUser}
          colorClass={"bg-orange-500/40 text-orange-500"}
          description={"Secciones asignadas al profesor"}
        />

        <InfoCard
          label="Notas Cargadas"
          value={`9`}
          icon={faCheckCircle}
          colorClass="bg-green-500/40 text-green-500"
          description={`89% del trimestre listo`}
        />

        <InfoCard
          label="Total Estudiantes"
          value={"90"}
          icon={faUsers}
          colorClass="bg-blue-500/40 text-blue-500"
          description="Inscritos en la sección"
        />
        <InfoCard
          label="Promedio Grupal"
          value="14.5"
          icon={faExclamationTriangle}
          colorClass="bg-indigo-500/40 text-indigo-500"
          description="Rendimiento actual"
        />

        <InfoCard
          label="Pendientes"
          value={"8"}
          icon={faClock}
          colorClass="bg-amber-500/40 text-orange-500"
          description="Faltan por procesar"
        />
      </div>
    </section>
  );
}
