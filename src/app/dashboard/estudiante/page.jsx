"use client";
import { useSession } from "next-auth/react";

export default function dashboardStudiantPage() {
  const { data: session, status } = useSession();

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

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-indigo-900">
        Hola, <span className="text-cyan-600">{session?.user?.name}</span>👋
      </h1>
      <p className="text-slate-500">Bienvenido a tu panel de estudiante.</p>
    </div>
  );
}
