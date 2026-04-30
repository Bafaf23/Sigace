"use client";
import AccessDenied from "@/components/atom/AccessDenied";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";


export default function AdminPage() {

  if (!user || user?.role !== "ADMIN") {
    return <AccessDenied />;
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          <p className="font-medium text-slate-600">Verificando acceso...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <HeaderDashbord user={user} />
      <AccionesRapidas />
    </>
  );
}
