"use client";

import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import Reportes from "@/components/molecules/Reportes";
import Resumenes from "@/components/molecules/Resumenes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function Profesor() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const user = useMemo(() => session?.user, [session]);
  const role = session?.user?.role;

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      /*   router.push("/login"); */
      return;
    }
    if (role !== "TEACHER") {
      console.log("Rol incorrecto detectado:", role);
      /*   router.push(""); */
    }
  }, [status, user]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          <p className="font-medium text-slate-600">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== "TEACHER") {
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
