"use client";
import Icon from "../atom/Icon";
import { useAuth } from "@/context/AuthContext";
import {
  faEdit,
  faChartLine,
  faHome,
  faBook,
  faChalkboardTeacher,
  faUserMinus,
  faUserCheck,
  faSitemap,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Aciones rapidas para el usuario, en vista moviles, con soprte al component Icon
 * Con opciones dependiendo al rol del Usuario [TEACHER, STUDENT, ADMIN]
 *
 * @returns {JSX.Element}
 */

export default function AccionesRapidas() {
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const menuConfig = {
    teacher: [
      {
        name: "Inicio",
        src: "/dashboard/teachers",
        icon: faHome,
        active: pathname === "/dashboard/teachers" ? "hidden" : "",
      },
      {
        name: "Cargar Notas",
        src: "/dashboard/teachers/cargarNotas",
        icon: faEdit,
        active: pathname === "/dashboard/teachers/cargarNotas" ? "hidden" : "",
      },
      {
        name: "Plan Evaluativo",
        src: "/dashboard/teachers/planEvaluativo",
        icon: faChartLine,
        active:
          pathname === "/dashboard/teachers/planEvaluativo" ? "hidden" : "",
      },
    ],
    student: [
      {
        name: "Inicio",
        src: "/dashboard/students",
        icon: faHome,
        active: pathname === "/dashboard/students" ? "hidden" : "",
      },
      {
        name: "Notas",
        src: "/dashboard/students/notas",
        icon: faEdit,
        active: pathname === "/dashboard/students/notas" ? "hidden" : "",
      },
    ],
    administrator: [
      {
        icon: faHome,
        name: "Mi Inicio",
        src: "/dashboard/administrators",
        active: pathname === `/dashboard/administrators` ? "hidden" : "",
      },
      {
        icon: faSitemap,
        name: "Control de Secciones",
        active: pathname === `/dashboard/administrators/materias`,
        src: "/dashboard/administrators/materias",
      },
      {
        icon: faUserCheck,
        name: "Inscripciones",
        active: pathname === `/dashboard/administrators/materias`,
        src: "/dashboard/administrators/materias",
      },
      {
        icon: faUserMinus,
        name: "Retiros y Traslados",
        active: pathname === `/dashboard/administrators/materias`,
        src: "/dashboard/administrators/materias",
      },
      {
        icon: faChalkboardTeacher,
        name: "Carga Académica",
        active: pathname === `/dashboard/administrators/materias`,
        src: "/dashboard/administrators/materias",
      },
      {
        icon: faBook,
        name: "Gestión de Materias",
        active: pathname === `/dashboard/administrators/materias`,
        src: "/dashboard/administrators/materias",
      },
      {
        icon: faCalendarCheck,
        name: "Configuración de Lapsos",
        active: pathname === `/dashboard/administrators/materias`,
        src: "/dashboard/administrators/materias",
      },
    ],
  };

  const acciones = menuConfig[user?.user?.role || "student"] || [];

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
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-500 shadow-sm transition-all group-hover:scale-110 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:shadow-md dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:group-hover:bg-slate-400">
              <Icon icon={accion.icon} />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold whitespace-nowrap text-slate-600 transition-colors group-hover:text-indigo-700 dark:text-slate-300 dark:group-hover:text-indigo-400">
                {accion.name}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </section>
  );
}
