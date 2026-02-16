"use client";
import Etiqueta from "../atom/Etiqueta";
import Button from "../atom/Button";
import {
  faUserPlus,
  faFileInvoice,
  faArrowRight,
  faStore,
  faTimes,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

import CardEstado from "../atom/CardEstado";

export default function Herosigace() {
  return (
    <>
      <section
        id="hero"
        className="relative py-20 px-6 overflow-hidden flex-1 scroll-mt-30"
      >
        {/* Decoración de fondo (Átomo de diseño) */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-9xl mx-10 flex flex-col md:flex-row items-center gap-12">
          {/* Lado Izquierdo: Textos (Molécula) */}
          <div className="flex-1 text-center md:text-left z-10">
            <div className="flex gap-2 items-center">
              <Etiqueta children={"gestion Escolar 2026"}></Etiqueta>
              <Etiqueta
                children={"Juan de Escalona"}
                className="bg-amber-500/10 text-amber-400"
              ></Etiqueta>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-indigo-600 leading-tight mb-6">
              Control de Estudios <br />
              <span className="text-cyan-500 underline decoration-cyan-500/30">
                Inteligente
              </span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              Optimiza la inscripción, carga de notas y reportes académicos del
              centro de estudio con una plataforma rápida y segura.
            </p>

            {/* Acciones (Molécula de Botones) */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                classNameBtn={
                  "bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 group shadow-lg shadow-cyan-500/20"
                }
                children={"Iniciar Inscripción"}
                icon={faUserPlus}
              ></Button>
              <Button
                classNameBtn={
                  "bg-indigo-800 hover:bg-indigo-700 text-slate-200 px-8 py-3 rounded-xl font-bold border border-indigo-700 transition-all flex items-center gap-2 z-50 relative"
                }
                children={"Ver Horarios"}
                icon={faTable}
                type={"button"}
              ></Button>
            </div>
          </div>

          {/* Lado Derecho: Tarjetas de Estado (Organismo de previsualización) */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <CardEstado
              icon={faFileInvoice}
              info={"1,240"}
              titel={"Estudiantes Activos"}
            ></CardEstado>

            <CardEstado
              titel={"Liceos Registrados"}
              info={"23"}
              icon={faStore}
            ></CardEstado>
          </div>
        </div>
      </section>
    </>
  );
}
