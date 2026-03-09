"use client";
import Icon from "@/components/atom/Icon";
import {
  faCheckCircle,
  faDownload,
  faHome,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function EnrollmentSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-xl">
        {/* Icono de Éxito Animado */}
        <div className="mb-6 flex justify-center">
          <div className="animate-bounce rounded-full bg-green-100 p-4">
            <Icon icon={faCheckCircle} className="text-5xl text-green-600" />
          </div>
        </div>

        <h1 className="mb-2 text-3xl font-extrabold text-slate-800">
          ¡Registro Exitoso!
        </h1>
        <p className="mb-8 text-slate-500">
          El estudiante ha sido inscrito correctamente en el sistema **SIGACE**.
          Ya puedes gestionar su ficha académica.
        </p>

        {/* Card de Resumen Rápido */}
        <div className="mb-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-400">Estado:</span>
            <span className="font-bold text-green-600 uppercase">Activo</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Sistema:</span>
            <span className="font-semibold text-slate-700">SIGACE v1.0</span>
          </div>
        </div>

        {/* Acciones */}
        <div className="space-y-3">
          <button
            onClick={() => window.print()}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 py-3 font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-indigo-700"
          >
            <Icon icon={faPrint} />
            Imprimir Planilla
          </button>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-200"
            >
              <Icon icon={faHome} />
              Inicio
            </Link>
            <Link
              href="/enrollment"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-semibold text-slate-600 transition-all hover:bg-slate-50"
            >
              Nuevo Registro
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          Se ha enviado un correo de confirmación a la dirección registrada.
        </p>
      </div>
    </div>
  );
}
