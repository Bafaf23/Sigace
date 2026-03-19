"use client";
import Button from "@/components/atom/Button";
import CardSecction from "@/components/molecules/CardGridSetion.jsx";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import Modal from "@/components/organism/Modal";
import FormSection from "@/components/organism/formSection";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/* export const metadata = {
  title: "Control de Secciones",
};
 */
export default function controlSecciones() {
  const dataSet = null;
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <HeaderDashbord titelPage={"Control de Secciones"} />
        <div className="p-3">
          <Button
            onClick={() => setIsopen(!isOpen)}
            icon={faPlus}
            classNameBtn={
              "bg-indigo-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1"
            }
          >
            {"Crear seccion"}
          </Button>

          <Modal
            title={"Crea una nueva seccion"}
            isOpen={isOpen}
            onClose={() => setIsopen(!isOpen)}
          >
            {<FormSection />}
          </Modal>
        </div>
      </div>
      <CardSecction dataSet={dataSet} />
    </>
  );
}
