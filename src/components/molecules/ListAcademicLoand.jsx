"use client";
import Button from "../atom/Button";
import CardLoand from "../atom/CardLoand";
import Icon from "../atom/Icon";
import FormAcadLoand from "../organism/FormAcadLoand";
import Modal from "../organism/Modal";
import { faLongArrowDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ListAcademicLoand({
  subjects,
  teachers,
  sections,
  academicLoads = [],
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!academicLoads || academicLoads.length === 0) {
    return (
      <div className="mt-5 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-12 text-center dark:border-slate-500 dark:bg-slate-700">
        <Icon
          icon={faLongArrowDown}
          className="mb-4 text-4xl text-slate-300 dark:text-slate-400"
        />
        <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
          No hay carga academica registradas
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Comienza creadndo la carga academica en el boton de abajo.
        </p>
        <Button
          onClick={() => setIsOpen(true)}
          icon={faPlus}
          classNameBtn="bg-indigo-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1 mt-3"
        >
          {"Crear Carga Academica"}
        </Button>
        <Modal
          title={"Carga Academica"}
          isOpen={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        >
          <FormAcadLoand
            subjects={subjects}
            teachers={teachers}
            sections={sections}
          />
        </Modal>
      </div>
    );
  }
  return (
    <div className="p-3">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-500 uppercase dark:text-slate-400">
          Carga Academica
        </h2>
        <div>
          <Button
            onClick={() => setIsOpen(true)}
            icon={faPlus}
            classNameBtn="bg-indigo-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1"
          >
            {"Anadir Carga academica"}
          </Button>

          <Modal
            title={"Nueva Carga Académica"}
            isOpen={isOpen}
            onClose={() => setIsOpen(!isOpen)}
          >
            <FormAcadLoand
              subjects={subjects}
              teachers={teachers}
              sections={sections}
            />
          </Modal>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {academicLoads.map((item) => (
          <CardLoand key={item.id} load={item} />
        ))}
      </div>
    </div>
  );
}
