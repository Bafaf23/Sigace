"use client";

import { generadorPV } from "@/app/services/generadorPV";
import Button from "@/components/atom/Button";
import Selector from "@/components/atom/Selector";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import FormCargaPV from "@/components/molecules/FormCargaPV";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import Modal from "@/components/organism/Modal";
import TablaPV from "@/components/organism/TablaPV";
import { faPrint, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function PlanEvaluativo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = {
    materias: [
      { id: 1, label: "Matemática", value: "matematica" },
      { id: 2, label: "Física", value: "fisica" },
    ],
  };

  const evaluacionesEjemplo = [
    {
      semana: "02",
      contenido: "Ecuaciones de 2do Grado",
      actividad: "Taller Práctico",
      tecnica: "Análisis de producción",
      instrumento: "Escala de Estimación",
      tipoForma: "S/H",
      porcentaje: 20,
    },
    {
      semana: "04",
      contenido: "Funciones Cuadráticas",
      actividad: "Prueba Escrita",
      tecnica: "Prueba objetiva",
      instrumento: "Cuestionario",
      tipoForma: "S/H",
      porcentaje: 25,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between pr-4">
        <HeaderDashbord titelPage={"Plan Evaluativo"} />
        <div className="p-3">
          <Button
            icon={faPlus}
            classNameBtn={
              "bg-indigo-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1"
            }
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            {"Cargar PV"}
          </Button>
          <Modal
            title={"Nueva Evaluación"}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(!isModalOpen)}
          >
            <FormCargaPV />
          </Modal>
        </div>
      </div>
      <AccionesRapidas />
      <section className="p-3">
        <h1 className="text-2xl font-bold text-gray-500/60">Plan Evaluativo</h1>

        <div className="mt-3 mb-6 flex items-center justify-between">
          <div className="max-w-xs">
            <Selector
              id={"selectorPV"}
              label={"Selecciona la Asignatura"}
              options={user.materias || []}
            />
          </div>
          <Button
            icon={faPrint}
            onClick={() => generadorPV(user, evaluacionesEjemplo)}
            classNameBtn={
              "bg-orange-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1"
            }
          >
            {"Imprimir PV"}
          </Button>
        </div>

        <TablaPV evaluaciones={evaluacionesEjemplo} />
      </section>
    </>
  );
}
