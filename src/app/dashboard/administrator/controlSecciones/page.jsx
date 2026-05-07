"use client";
import Button from "@/components/atom/Button";
import CardGridSetion from "@/components/molecules/CardGridSetion";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import FormSection from "@/components/organism/FormSection";
import Modal from "@/components/organism/Modal";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

/* export const metadata = {
  title: "Control de Secciones",
};
 */
export default function controlSecciones() {
  const [secciones, setSecciones] = useState([]);
  const [availableStudents, setAvailableStudents] = useState([]);
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
      <CardGridSetion
        dataSet={secciones}
        availableStudents={availableStudents}
      />
    </>
  );
}
