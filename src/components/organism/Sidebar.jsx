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
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  /* indicador de ruta */
  const patthename = usePathname();

  return (
    <aside className={`flex flex-col p-3 transition-all duration-300`}>
      <div className={`mb-8 flex items-center border-b border-gray-200 pb-3`}>
        <div className="truncate">
          <SigaceLogo className={"text-indigo-500"} />
        </div>
      </div>

      <nav className={`flex grow flex-col space-y-2`}>
        <NavLink
          icon={faHome}
          label={"Inicio"}
          classNameLink={``}
          active={patthename === `/dashboard/profesor`}
          direcction={"/dashboard/profesor"}
        />
        <NavLink
          icon={faFile}
          label={"Reportes"}
          classNameLink={` `}
          direcction={"/reportes"}
          active={patthename === `/reportes`}
        />
        <NavLink
          icon={faPenToSquare}
          label={"Cargar Notas"}
          classNameLink={``}
          direcction={"/dashboard/profesor/cargarNotas"}
          active={patthename === `/dashboard/profesor/cargarNotas`}
        />
        <NavLink
          icon={faCogs}
          label={"Configuración"}
          classNameLink={``}
          direcction={"/setting"}
          active={patthename === `/setting`}
        />
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
