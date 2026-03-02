"use client";
import Icon from "../atom/Icon";
import { faEdit, faFill, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccionesRapidas() {
  const pathname = usePathname();

  const acciones = [
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
      name: "Reportes",
      src: "/dashboard/profesor/reportes",
      icon: faFill,
      active: pathname === "/dashboard/profesor/reportes" ? "hidden" : "",
    },
  ];

  return (
    <nav className="mt-4 flex justify-evenly md:hidden">
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
  );
}
