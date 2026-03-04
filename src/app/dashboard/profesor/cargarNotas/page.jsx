"use client";
import { inscripcion } from "@/app/services/inscripcion";
import Button from "@/components/atom/Button";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import FormCargaNotas from "@/components/molecules/FromCargaNotas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import Modal from "@/components/organism/Modal";
import TablaNotas from "@/components/organism/TablaNotas";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function cargarNotas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const db = {
    infoMateria: {
      id: "8902",
      nombre: "Matemática",
      anio: "5to",
      seccion: "A",
      profesor: "Bryant Facenda",
    },

    lapsos: [
      {
        id_lapso: 1,
        nombre: "Primer Lapso",
        estatus: "cerrado",
        alumnos: [
          {
            id: "V-28.123.456",
            nombre: "Juan Pérez",
            n1: 15.0,
            n2: 12.5,
            n3: 18.0,
          },
          {
            id: "CI-28.123.476",
            nombre: "Antonio Pérez",
            n1: 10.0,
            n2: 10.0,
            n3: 14.5,
          },
          {
            id: "V-29.999.888",
            nombre: "María García",
            n1: 20.0,
            n2: 19.0,
            n3: 20.0,
          },
        ],
      },
      {
        id_lapso: 2,
        nombre: "Segundo Lapso",
        estatus: "cerrado",
        alumnos: [
          {
            id: "V-28.123.456",
            nombre: "Juan Pérez",
            n1: 14.0,
            n2: 16.0,
            n3: 15.0,
          },
          {
            id: "V-28.123.476",
            nombre: "Antonio Pérez",
            n1: 0.0,
            n2: 0.0,
            n3: 0.0,
          },
        ],
      },
      {
        id_lapso: "3",
        nombre: "Tercer Lapso",
        estatus: "abierto",
        alumnos: [
          {
            id: "V-28.123.456",
            nombre: "Juan Pérez",
            n1: 14.0,
            n2: 16.0,
            n3: 15.0,
          },
          {
            id: "V-28.123.476",
            nombre: "Antonio Pérez",
            n1: 0.0,
            n2: 0.0,
            n3: 0.0,
          },
        ],
      },
    ],
  };

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

  const alumnosDisponibles = [
    {
      id: "V-30123456",
      nombre: "Adriana Villalobos",
      seccion: "A",
      anio: "5to",
    },
    {
      id: "V-31987654",
      nombre: "Brayan Martínez",
      seccion: "A",
      anio: "5to",
    },
    {
      id: "CE-29555444",
      nombre: "Carlos Rodríguez",
      seccion: "A",
      anio: "5to",
    },
    {
      id: "V-32111222",
      nombre: "Daniela Sosa",
      seccion: "A",
      anio: "5to",
    },
    {
      id: "V-30888999",
      nombre: "Esteban Quito",
      seccion: "A",
      anio: "5to",
    },
  ];

  /*  const materias = [
    ...new Map(user.materias.map((materia) => [materia.id, materia])).values(),
  ]; */

  /*   const materia = user.materias.find((m) => m.id === MateriaSelecioada); */

  /* const yearMateria = materia?.year.map((y) => ({ value: y, label: y }) || []); */
  /* 
  const secctioMateria = materia?.section.map(
    (set) => ({ value: set, label: set }) || [],
  ); */

  return (
    <>
      <div className="flex flex-col justify-between md:flex-row">
        <HeaderDashbord titelPage={"Cargar notas"} />
        <div className="p-3">
          <Button
            classNameBtn={
              "bg-indigo-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1"
            }
            icon={faPlus}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            {"Añadir Nueva Calificación"}
          </Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Cargar Calificaciones"
          >
            <FormCargaNotas
              listaAlumnosSinNotas={alumnosDisponibles}
              onSave={(data) => {
                // Aquí haces el fetch POST a tu base de datos
                console.log("Guardando nueva nota para:", data.alumnoId);
              }}
              onCancel={() => setIsModalOpen(false)}
            />
          </Modal>
        </div>
      </div>

      <AccionesRapidas />
      <div className="mt-6 flex flex-col gap-5 p-3 font-bold text-gray-500/60">
        <div className="flex flex-col justify-between md:flex-row md:items-center lg:flex-row">
          <h1 className="text-2xl">Notas cargadas por lapso</h1>
          <p>Materia</p>
        </div>
        {db.lapsos.map((lapso) => (
          <TablaNotas data={lapso} key={lapso.id_lapso} />
        ))}
      </div>
      <Button icon={faPlus} onClick={() => inscripcion()}>
        {"inscripicin"}
      </Button>
    </>
  );
}
