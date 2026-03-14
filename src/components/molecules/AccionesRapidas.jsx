"use client";
import Icon from "../atom/Icon";
import { faEdit, faChartLine, faHome } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccionesRapidas() {
  const pathname = usePathname();

  const { data: session } = useSession();
  const userRole = session?.user?.role;
  console.log(userRole);

  const menuConfig = {
    TEACHERS: [
      {
        name: "Inicio",
        src: "/dashboard/profesor",
        icon: faHome,
        active: pathname === "/dashboard/profesor" ? "hidden" : "",
      },
      {
        name: "Cargar Notas",
        src: "/dashboard/profesor/cargarNotas",
        icon: faEdit,
        active: pathname === "/dashboard/profesor/cargarNotas" ? "hidden" : "",
      },
      {
        name: "Plan Evaluativo",
        src: "/dashboard/profesor/planEvaluativo",
        icon: faChartLine,
        active:
          pathname === "/dashboard/profesor/planEvaluativo" ? "hidden" : "",
      },
    ],
    STUDENT: [
      {
        name: "Inicio",
        src: "/dashboard/estudiante",
        icon: faHome,
        active: pathname === "/dashboard/estudiante" ? "hidden" : "",
      },
      {
        name: "Notas",
        src: "/dashboard/estudiante/notas",
        icon: faEdit,
        active: pathname === "/dashboard/estudiante/asistencia" ? "hidden" : "",
      },
    ],
  };

  const acciones = menuConfig[userRole] || [];

  return (
    <section className="p-3 lg:hidden">
      <h1 className="font-bold text-gray-400 uppercase">Acciones</h1>
      <nav className="mt-4 flex justify-evenly rounded-2xl bg-gray-400/30 p-3">
        {acciones.map((accion, index) => (
          <Link
            key={index}
            href={accion.src}
            className={`group flex flex-col items-center gap-2 transition-all ${accion.active}`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-500 shadow-sm transition-all group-hover:scale-110 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:shadow-md">
              <Icon icon={accion.icon} />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold whitespace-nowrap text-slate-600 transition-colors group-hover:text-indigo-700">
                {accion.name}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </section>
  );
}
