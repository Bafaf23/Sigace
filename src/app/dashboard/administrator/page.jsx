"use client";
import AccessDenied from "@/components/molecules/AccessDenied";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          <p className="animate-pulse text-sm font-medium text-slate-500">
            Sincronizando con SIGACE...
          </p>
        </div>
      </div>
    );
  }

  if (!user || user.user.role !== "administrator") {
    return <AccessDenied />;
  }

  return (
    <div className="animate-in fade-in duration-500">
      <HeaderDashbord user={user} />
      <main className="space-y-6 p-4">
        <AccionesRapidas role={user.role} />
        
      </main>
    </div>
  );
}
