"use client";
import { auth } from "@/auth";
import CardEstado from "@/components/atom/CardEstado";
import InfoCard from "@/components/atom/InfoCard";
import Selector from "@/components/atom/Selector";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import {
  faExclamationTriangle,
  faCheckCircle,
  faUsers,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profesor() {
  const router = useRouter();

  const user = {
    name: "Bryant",
    lastName: "Facenda",
    rol: "profesor",
    materias: [
      {
        id: "8901",
        value: "castellano",
        label: "Castellano",
      },
      {
        id: "8902",
        value: "matematica",
        label: "Matematica",
      },
      {
        id: "8903",
        value: "fisica",
        label: "Fisica",
      },
      {
        id: "8904",
        value: "historia",
        label: "Historia",
      },
      {
        id: "8905",
        value: "programcion",
        label: "Programacion",
      },
    ],
  };

  useEffect(() => {
    if (user.rol !== "profesor") {
      router.push("/");
    }
  }, [user, router]);

  if (user.rol !== "profesor") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="animate-pulse text-lg font-semibold text-red-600">
          Redireccionando... No tienes permiso para estar aquí.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="flex w-full flex-col p-3 md:flex-row md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-500 uppercase md:text-3xl">
            Bienvenido, {""}
            <span className="font-bold text-indigo-500 normal-case">
              {user.name} {user.lastName}
            </span>
          </h1>
          <div>
            <p className="text-xs text-gray-400/40 italic">
              Tu ultima coneccion
            </p>
            <span className="text-xs text-gray-400/40 italic">12/2/2030</span>
          </div>
        </div>

        <Selector
          id={"materias"}
          name={"Materia"}
          options={user.materias}
          label={"Materias"}
        />
      </div>
      <AccionesRapidas />
      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
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
    </>
  );
}
