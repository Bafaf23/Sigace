"use client"; // Aquí SÍ va el use client porque hay useState
import Button from "@/components/atom/Button";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import FormSubjetc from "@/components/organism/FormSubjetc";
import Modal from "@/components/organism/Modal";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function HeaderGestionMaterias() {
  const [isOpent, setIsOpent] = useState(false);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:p-3 lg:justify-between">
      <HeaderDashbord titelPage={"Gestion de materias y carga academica"} />
      <div className="p-3">
        <Button
          onClick={() => setIsOpent(true)}
          icon={faAdd}
          classNameBtn="bg-indigo-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1"
        >
          Crear materia
        </Button>
        <Modal
          title="Crea una Asignatura"
          isOpen={isOpent}
          onClose={() => setIsOpent(false)}
        >
          <FormSubjetc />
        </Modal>
      </div>
    </div>
  );
}
