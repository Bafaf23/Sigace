"use client";
import Button from "../atom/Button";
import Icon from "../atom/Icon";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function FormCargaNotas({
  listaAlumnosSinNotas,
  onSave,
  onCancel,
}) {
  const [busqueda, setBusqueda] = useState("");
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);
  const [notas, setNotas] = useState({ n1: "", n2: "", n3: "" });

  // Filtrar alumnos mientras el profesor escribe la cédula o nombre
  const alumnosFiltrados = (listaAlumnosSinNotas || []).filter(
    (al) =>
      al.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      al.id.includes(busqueda),
  );

  const handleSelectAlumno = (alumno) => {
    setAlumnoSeleccionado(alumno);
    setBusqueda(""); // Limpiamos la búsqueda tras seleccionar
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!alumnoSeleccionado) return alert("Debes seleccionar un estudiante");

    onSave({
      alumnoId: alumnoSeleccionado.id,
      ...notas,
    });

    // Resetear para la siguiente carga
    setAlumnoSeleccionado(null);
    setNotas({ n1: "", n2: "", n3: "" });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* 1. Buscador de Estudiantes */}
      {!alumnoSeleccionado ? (
        <div className="relative">
          <label className="mb-1 block text-sm font-bold text-slate-700">
            Buscar Estudiante (Nombre o Cédula)
          </label>
          <div className="relative">
            <Icon
              icon={faSearch}
              className="absolute top-3 left-3 text-slate-400"
            />
            <input
              type="text"
              className="w-full rounded-xl border-2 border-slate-200 py-2 pr-4 pl-10 outline-none focus:border-indigo-500"
              placeholder="Ej: 30.123.456"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          {/* Resultados de búsqueda rápidos */}
          {busqueda.length > 0 && (
            <div className="absolute z-10 mt-1 max-h-40 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl">
              {alumnosFiltrados.map((al) => (
                <div
                  key={al.id}
                  onClick={() => handleSelectAlumno(al)}
                  className="flex cursor-pointer justify-between border-b p-3 last:border-0 hover:bg-indigo-50"
                >
                  <span className="font-medium text-slate-700">
                    {al.nombre}
                  </span>
                  <span className="text-xs text-slate-400">{al.id}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* 2. Alumno Seleccionado (Card de confirmación) */
        <div className="animate-in slide-in-from-top-2 flex items-center justify-between rounded-xl bg-indigo-600 p-4 text-white shadow-lg">
          <div>
            <p className="text-xs font-bold uppercase opacity-80">
              Cargando notas a:
            </p>
            <p className="text-lg font-bold">{alumnoSeleccionado.nombre}</p>
          </div>
          <button
            type="button"
            onClick={() => setAlumnoSeleccionado(null)}
            className="rounded-md bg-indigo-400 px-2 py-1 text-xs transition-colors hover:bg-indigo-300"
          >
            Cambiar
          </button>
        </div>
      )}

      {/* 3. Inputs de Notas */}
      <div
        className={`grid grid-cols-3 gap-4 transition-opacity ${!alumnoSeleccionado ? "pointer-events-none opacity-30" : "opacity-100"}`}
      >
        {["n1", "n2", "n3"].map((n, i) => (
          <div key={n}>
            <label className="mb-1 block text-xs font-bold text-slate-500 uppercase">
              Nota {i + 1}
            </label>
            <input
              type="number"
              max="20"
              min="0"
              step="0.1"
              disabled={!alumnoSeleccionado}
              className="w-full rounded-xl border-2 border-slate-100 p-3 text-center text-xl font-bold outline-none focus:border-indigo-500"
              value={notas[n]}
              onChange={(e) => setNotas({ ...notas, [n]: e.target.value })}
              required
            />
          </div>
        ))}
      </div>

      {/* 4. Botones de Acción */}
      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          onClick={onCancel}
          classNameBtn="flex-1 p-3 bg-slate-100 text-slate-500 rounded-xl font-bold hover:bg-slate-200"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={!alumnoSeleccionado}
          classNameBtn={`flex-1 p-3 rounded-xl font-bold text-white shadow-lg transition-all ${
            alumnoSeleccionado
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          <Icon icon={faUserPlus} className="mr-2" /> Registrar Nota
        </Button>
      </div>
    </form>
  );
}
