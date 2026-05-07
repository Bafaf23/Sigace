"use client";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import Reportes from "@/components/molecules/Reportes";
import Resumenes from "@/components/molecules/Resumenes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TeachersPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setLoading(false);
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          <p className="font-medium text-slate-600">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  if (!user || user?.role !== "teacher") {
    router.push("/");
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="animate-pulse text-lg font-semibold text-red-600">
          Redireccionando... No tienes permiso para estar aquí.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <HeaderDashbord user={user} />
      <Resumenes teachersId={user?.id} />
      {/* movil */}
      <AccionesRapidas />
      <Reportes />
    </div>
  );
}
