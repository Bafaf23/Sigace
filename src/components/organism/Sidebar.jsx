"use client";

import Button from "../atom/Button";
import SigaceLogo from "../atom/SigaceLogo";
import NavLink from "../molecules/NavLink";
import {
  faHome,
  faSignOutAlt,
  faFile,
  faCogs,
  faPenToSquare,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const patthename = usePathname();

  const linkProfesor = [
    {
      icon: faHome,
      label: "Inicio",
      active: patthename === `/dashboard/profesor`,
      direccion: `/dashboard/profesor`,
    },
    {
      icon: faFile,
      label: "Reportes",
      active: patthename === `/dashboard/profesor/reportes`,
      direccion: `/dashboard/profesor/reportes`,
    },
    {
      icon: faPenToSquare,
      label: "Cargas de Notas",
      active: patthename === `/dashboard/profesor/cargarNotas`,
      direccion: `/dashboard/profesor/cargarNotas`,
    },
    {
      icon: faUserCheck,
      label: "Asistencias",
      active: patthename === `/dashboard/profesor/asistencia`,
      direccion: `/dashboard/profesor/asistencia`,
    },
  ];

  return (
    <aside
      className={`hidden p-3 transition-all duration-300 md:flex md:flex-col`}
    >
      <div className={`mb-8 flex items-center border-b border-gray-200 pb-3`}>
        <div className="truncate">
          <SigaceLogo className={"text-indigo-500"} />
        </div>
      </div>

      <nav className={`flex grow flex-col space-y-2`}>
        {linkProfesor.map((link) => (
          <NavLink
            label={link.label}
            icon={link.icon}
            direcction={link.direccion}
            active={link.active}
          />
        ))}
      </nav>

      {/* Cerrar sesion */}
      <div className="mt-auto border-t border-slate-400/30 pt-4">
        <Button
          icon={faSignOutAlt}
          classNameBtn={`flex items-center gap-3 w-full text-gray-600/70 p-2 hover:bg-red-500/50 hover:text-red-900 rounded-lg transition-all text-md`}
          children={"Cerrar Sesion"}
        ></Button>
      </div>
    </aside>
  );
}
