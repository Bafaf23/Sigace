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
  faBook,
  faUserMinus,
  faSitemap,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarSidebar() {
  const patthename = usePathname();
  const router = useRouter();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  const menuLink = {
    teacher: [
      {
        icon: faHome,
        label: "Inicio",
        active: patthename === `/dashboard/teachers`,
        direccion: `/dashboard/teachers`,
      },
      {
        icon: faListCheck,
        label: "Plan Evaluativo",
        active: patthename === `/dashboard/teachers/planEvaluativo`,
        direccion: `/dashboard/teachers/planEvaluativo`,
      },
      {
        icon: faPenToSquare,
        label: "Cargas de Notas",
        active: patthename === `/dashboard/teachers/cargarNotas`,
        direccion: `/dashboard/teachers/cargarNotas`,
      },
      {
        icon: faUserCheck,
        label: "Asistencias",
        active: patthename === `/dashboard/teachers/asistencia`,
        direccion: `/dashboard/teachers/asistencia`,
      },
    ],
    student: [
      {
        icon: faHome,
        label: "Mi Inicio",
        direccion: "/dashboard/students",
        active: patthename === `/dashboard/students`,
      },
      {
        icon: faListCheck,
        label: "Mis Notas",
        active: patthename === `/dashboard/students/notas`,
        direccion: "/dashboard/students/notas",
      },
      {
        icon: faUserCheck,
        label: "Mi Asistencia",
        active: patthename === `/dashboard/students/asistencia`,
        direccion: "/dashboard/students/asistencia",
      },
    ],
    administrator: [
      {
        icon: faHome,
        label: "Mi Inicio",
        direccion: "/dashboard/administrators",
        active: patthename === `/dashboard/administrators`,
      },
      {
        icon: faSitemap,
        label: "Control de Secciones",
        active: patthename === `/dashboard/administrators/materias`,
        direccion: "/dashboard/administrators/materias",
      },
      {
        icon: faUserCheck,
        label: "Inscripciones",
        active: patthename === `/dashboard/administrators/materias`,
        direccion: "/dashboard/administrators/materias",
      },
      {
        icon: faUserMinus,
        label: "Retiros y Traslados",
        active: patthename === `/dashboard/administrators/materias`,
        direccion: "/dashboard/administrators/materias",
      },

      {
        icon: faBook,
        label: "Gestión de Materias",
        active: patthename === `/dashboard/administrators/materias`,
        direccion: "/dashboard/administrators/materias",
      },
      {
        icon: faCalendarCheck,
        label: "Configuración de Lapsos",
        active: patthename === `/dashboard/administrators/lapsos`,
        direccion: "/dashboard/administrators/lapsos",
      },
    ],
  };

  const currentLinks = menuLink[user.role] || [];

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
            classNameIcon={link.active ? "text-cyan-600" : ""}
          />
        ))}
      </nav>

      {/* Cerrar sesion */}
      <div className="flex items-center justify-between">
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
