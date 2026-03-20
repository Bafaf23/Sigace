"use client";

import Button from "../atom/Button";
import SigaceLogo from "../atom/SigaceLogo";
import ThemeToggle from "../atom/ThemeToggle";
import VersionTag from "../atom/VersionTag";
import NavLink from "../molecules/NavLink";
import {
  faHome,
  faSignOutAlt,
  faListCheck,
  faPenToSquare,
  faUserCheck,
  faBook,
  faUserMinus,
  faSitemap,
  faChalkboardTeacher,
  faCalendarCheck,
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
    ADMIN: [
      {
        icon: faHome,
        label: "Mi Inicio",
        direccion: "/dashboard/administradores",
        active: patthename === `/dashboard/administradores`,
      },
      {
        icon: faSitemap,
        label: "Control de Secciones",
        active: patthename === `/dashboard/administradores/controlSecciones`,
        direccion: "/dashboard/administradores/controlSecciones",
      },
      {
        icon: faUserCheck,
        label: "Inscripciones",
        active: patthename === `/dashboard/administradores/inscripciones`,
        direccion: "/dashboard/administradores/inscripciones",
      },
      {
        icon: faUserMinus,
        label: "Retiros y Traslados",
        active: patthename === `/dashboard/administradores/retierosTraslados`,
        direccion: "/dashboard/administradores/retierosTraslados",
      },
      {
        icon: faChalkboardTeacher,
        label: "Carga Académica",
        active: patthename === `/dashboard/administradores/cargaAcademica`,
        direccion: "/dashboard/administradores/cargaAcademica",
      },
      {
        icon: faBook,
        label: "Gestión de Materias",
        active: patthename === `/dashboard/administradores/gestionMateria`,
        direccion: "/dashboard/administradores/gestionMateria",
      },
      {
        icon: faCalendarCheck,
        label: "Configuración de Lapsos",
        active: patthename === `/dashboard/administradores/settingLapso`,
        direccion: "/dashboard/administradores/settingLapso",
      },
    ],
  };

  const currentLinks = menuLink[userRole] || [];

  return (
    <aside
      className={`hidden p-3 transition-all duration-300 md:hidden md:flex-col lg:flex`}
    >
      <div
        className={`mb-8 flex items-center border-b border-gray-200 pb-3 dark:border-slate-700`}
      >
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
      <div className="flex items-center justify-between">
        <ThemeToggle />
        <VersionTag />
      </div>
      <div className="mt-auto border-t border-slate-400/30 pt-4 dark:border-slate-700">
        <Button
          icon={faSignOutAlt}
          onClick={handleLogout}
          classNameBtn={`flex items-center gap-3 w-full text-gray-600/70 p-2 hover:bg-red-500/50 hover:text-red-900 rounded-lg transition-all text-md dark:text-slate-500 dark:hover:bg-red-300/50 dark:hover:text-red-600`}
          children={"Cerrar Sesion"}
        ></Button>
      </div>
    </aside>
  );
}
