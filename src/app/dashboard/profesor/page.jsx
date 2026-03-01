"use client";
import { auth } from "@/auth";
import CardEstado from "@/components/atom/CardEstado";
import Selector from "@/components/atom/Selector";
import {
  faChartLine,
  faGraduationCap,
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
      <div className="flex justify-between rounded-xl p-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-500 uppercase">
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

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">
        <CardEstado
          titel={"Secciones"}
          info="5"
          icon={faUser}
          color="bg-blue-500"
        />
        <CardEstado
          titel="Alumnos"
          info={"160"}
          icon={faGraduationCap}
          color="bg-indigo-500"
        />
        <CardEstado
          titel={"Promedio"}
          info={"14.5"}
          icon={faChartLine}
          color="bg-emerald-500"
        />
        <CardEstado
          titel={"Pendientes"}
          info="12"
          icon={faClock}
          color="bg-orange-500"
        />
      </div>
    </>
  );
}
