"use client";
import Button from "@/components/atom/Button";
import Selector from "@/components/atom/Selector";
import TablaNotas from "@/components/organism/TablaNotas";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function cargarNotas() {
  const [MateriaSelecioada, setMateriaSelecioada] = useState();

  const user = {
    name: "Bryant",
    lastName: "Facenda",
    rol: "profesor",
    materias: [
      {
        id: "8901",
        value: "castellano",
        label: "Castellano",
        year: ["1ero"],
        section: ["A", "D"],
      },
      {
        id: "8902",
        value: "matematica",
        label: "Matematica",
        year: ["5to", "2to", "1ero"],
        section: ["A"],
      },
      {
        id: "8903",
        value: "fisica",
        label: "Fisica",
        year: ["5to", "2to", "1ero"],
        section: ["A", "C", "D"],
      },
      {
        id: "8904",
        value: "historia",
        label: "Historia",
        year: ["1ero"],
        section: ["A", "C", "D"],
      },
      {
        id: "8905",
        value: "programcion",
        label: "Programacion",
        year: ["5to", "2to", "1ero"],
        section: ["A", "C", "D"],
      },
    ],
  };

  const materias = [
    ...new Map(user.materias.map((materia) => [materia.id, materia])).values(),
  ];

  const materia = user.materias.find((m) => m.id === MateriaSelecioada);

  const yearMateria = materia?.year.map((y) => ({ value: y, label: y }) || []);

  const secctioMateria = materia?.section.map(
    (set) => ({ value: set, label: set }) || [],
  );

  return (
    <>
      <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow">
        <h1 className="text-3xl font-bold text-blue-500">Cargar Notas</h1>
      </div>
      <div className="mt-5 flex items-center justify-between rounded-xl bg-white p-2 shadow">
        <div className="flex w-full justify-between">
          <div className="flex w-full items-center gap-3">
            <Selector
              id={"materiasId"}
              name={"Materia"}
              options={materias}
              label={"Materias"}
              onChange={(e) => setMateriaSelecioada(e.target.value)}
            />

            <Selector
              id={"yaer"}
              name={"year"}
              label={"Selecciona el año"}
              options={yearMateria}
            />

            <Selector
              id={"section"}
              name={"section"}
              label={"Selecciona la seccion"}
              options={secctioMateria}
            />
          </div>

          <div className="flex items-center">
            <Button
              classNameBtn={
                "bg-indigo-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1"
              }
              icon={faPlus}
            >
              {"Cargar nota"}
            </Button>
          </div>
        </div>
      </div>

      <TablaNotas />
    </>
  );
}
