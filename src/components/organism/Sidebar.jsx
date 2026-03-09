"use client";

import Button from "../atom/Button";
import SigaceLogo from "../atom/SigaceLogo";
import VersionTag from "../atom/VersionTag";
import NavLink from "../molecules/NavLink";
import {
  faHome,
  faSignOutAlt,
  faListCheck,
  faPenToSquare,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const patthename = usePathname();

  const { data: session } = useSession();
  const userRole = session?.user?.role;

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  const menuLink = {
    TEACHER: [
      {
        icon: faHome,
        label: "Inicio",
        active: patthename === `/dashboard/profesor`,
        direccion: `/dashboard/profesor`,
      },
      {
        icon: faListCheck,
        label: "Plan Evaluativo",
        active: patthename === `/dashboard/profesor/planEvaluativo`,
        direccion: `/dashboard/profesor/planEvaluativo`,
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
    ],
    STUDENT: [
      {
        icon: faHome,
        label: "Mi Inicio",
        direccion: "/dashboard/estudiante",
        active: patthename === `/dashboard/estudiante`,
      },
      {
        icon: faListCheck,
        label: "Mis Notas",
        active: patthename === `/dashboard/estudiante/notas`,
        direccion: "/dashboard/estudiante/notas",
      },
      {
        icon: faUserCheck,
        label: "Mi Asistencia",
        active: patthename === `/dashboard/estudiante/asistencia`,
        direccion: "/dashboard/estudiante/asistencia",
      },
    ],
  };

  const currentLinks = menuLink[userRole] || [];

  return (
    <aside
      className={`hidden p-3 transition-all duration-300 md:hidden md:flex-col lg:flex`}
    >
      <div className={`mb-8 flex items-center border-b border-gray-200 pb-3`}>
        <div className="truncate">
          <SigaceLogo className={"text-indigo-500"} />
        </div>
      </div>

      <nav className={`flex grow flex-col space-y-2`}>
        {currentLinks.map((link, index) => (
          <NavLink
            key={index}
            label={link.label}
            icon={link.icon}
            direcction={link.direccion}
            active={link.active}
            classNameIcon={link.active ? "text-orange-500" : ""}
          />
        ))}
      </nav>

      {/* Cerrar sesion */}
      <VersionTag />
      <div className="mt-auto border-t border-slate-400/30 pt-4">
        <Button
          icon={faSignOutAlt}
          onClick={handleLogout}
          classNameBtn={`flex items-center gap-3 w-full text-gray-600/70 p-2 hover:bg-red-500/50 hover:text-red-900 rounded-lg transition-all text-md`}
          children={"Cerrar Sesion"}
        ></Button>
      </div>
    </aside>
  );
}
