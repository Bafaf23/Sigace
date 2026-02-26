"use client";

import Button from "../atom/Button";
import SigaceLogo from "../atom/SigaceLogo";
import NavLink from "../molecules/NavLink";
import { faHouseUser, faUsers, faKey } from "@fortawesome/free-solid-svg-icons";

function irLogin() {
  window.location.href = "/login";
}

export default function Header() {
  return (
    <div className="sshadow sticky top-0 z-100 flex flex-col items-center gap-5 border border-gray-100 bg-white p-6">
      <div className="flex w-full justify-between">
        <SigaceLogo className="text-slate-300"></SigaceLogo>
        <div className="flex items-center gap-3">
          <nav className="flex gap-2">
            <NavLink
              icon={faHouseUser}
              label={"Inicio"}
              classNameLink={
                "flex gap-1 p-1 justify-center items-center text-indigo-600 font-bold text-xl hover:bg-indigo-400/20 border border-transparent hover:border-indigo-600 rounded-2xl "
              }
              direcction={"#hero"}
            ></NavLink>
            <NavLink
              icon={faUsers}
              label={"Sobre el proyecto"}
              classNameLink={
                "flex gap-1 p-2 justify-center items-center text-amber-600 text-xl font-bold hover:bg-amber-400/20 border border-transparent hover:border-amber-600 rounded-2xl "
              }
              direcction={"#nosotros"}
            ></NavLink>
          </nav>
          <Button
            classNameBtn={
              "bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-2 rounded-xl font-bold transition-all flex items-center gap-2 group cursor-pointer hidden md:block lg:block text-xl"
            }
            children={"Acceso"}
            icon={faKey}
            onClick={() => {
              irLogin();
            }}
          ></Button>
        </div>
      </div>
      {/* boton login para telefonos moviles */}
      <Button
        classNameBtn={
          "bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-bold transition-all flex items-center gap-2 group cursor-pointer md:hidden lg:hidden block w-full justify-center text-xl"
        }
        children={"Acceso"}
        icon={faKey}
        onClick={() => {
          irLogin();
        }}
      ></Button>
    </div>
  );
}
