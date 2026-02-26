"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CardEstado from "@/components/atom/CardEstado";
import Selector from "@/components/atom/Selector";
import {
  faChartLine,
  faGraduationCap,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { auth } from "@/auth";

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
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-red-600 animate-pulse">
          Redireccionando... No tienes permiso para estar aquí.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between bg-white p-3 rounded-xl border border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Bienvenido Prof.{" "}
            <span className="text-sky-500 font-bold">
              {user.name} {user.lastName}
            </span>
          </h1>
          <div>
            <p className="text-xs italic text-gray-400/40">
              Tu ultima coneccion
            </p>
            <span className="text-xs italic text-gray-400/40">12/2/2030</span>
          </div>
        </div>
        <Selector
          id={"materias"}
          name={"Materia"}
          options={user.materias}
          label={"Materias"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
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
