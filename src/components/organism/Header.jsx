"use client";

import SigaceLogo from "../atom/SigaceLogo";
import NavLink from "../molecules/NavLink";
import Button from "../atom/Button";
import { faHouseUser, faUsers, faKey } from "@fortawesome/free-solid-svg-icons";

function irLogin() {
  window.location.href = "/login";
}

export default function Header() {
  return (
    <div className="p-6 bg-white border border-gray-100 sshadow flex flex-col gap-5 items-center sticky top-0 z-100">
      <div className="flex justify-between w-full">
        <SigaceLogo></SigaceLogo>
        <div className="flex gap-3 items-center">
          <nav className="flex gap-2">
            <NavLink
              icon={faHouseUser}
              label={"Inicio"}
              classNameLink={
                "flex gap-1 p-1 justify-center items-center text-indigo-600"
              }
              direcction={"#hero"}
            ></NavLink>
            <NavLink
              icon={faUsers}
              label={"Sobre el proyecto"}
              classNameLink={
                "flex gap-1 p-1 justify-center items-center text-amber-600"
              }
              direcction={"#nosotros"}
            ></NavLink>
          </nav>
          <Button
            classNameBtn={
              "bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-2 rounded-xl font-bold transition-all flex items-center gap-2 group cursor-pointer hidden md:block lg:block"
            }
            children={"Acceso"}
            icon={faKey}
            onClick={() => {
              irLogin();
            }}
          ></Button>
        </div>
      </div>
      <Button
        classNameBtn={
          "bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-2 rounded-xl font-bold transition-all flex items-center gap-2 group cursor-pointer md:hidden lg:hidden block w-full justify-center"
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
