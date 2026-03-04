"use client";
import { auth } from "@/auth";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import Reportes from "@/components/molecules/Reportes";
import Resumenes from "@/components/molecules/Resumenes";
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
      <HeaderDashbord user={user} />
      <Resumenes />
      {/* movil */}
      <AccionesRapidas />
      <Reportes></Reportes>
    </>
  );
}
