import { useState } from "react";

export default function FormularioPV({ onAgregar }) {
  const [formData, setFormData] = useState({
    semana: "",
    contenido: "",
    actividad: "",
    tecnica: "",
    instrumento: "",
    tipoForma: "S/H",
    porcentaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Evaluación creada:", formData);
    // Aquí llamarías a tu función para guardar en la DB o actualizar el estado global
    if (onAgregar) onAgregar(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 md:grid-cols-3"
    >
      {/* Semana */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500">Semana</label>
        <input
          type="number"
          name="semana"
          placeholder="Ej: 02"
          className="rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          onChange={handleChange}
          required
        />
      </div>

      {/* Contenido / Referente */}
      <div className="flex flex-col gap-1 md:col-span-2">
        <label className="text-xs font-semibold text-slate-500">
          Referente Teórico (Contenido)
        </label>
        <input
          type="text"
          name="contenido"
          placeholder="Ej: Ecuaciones de segundo grado"
          className="rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500"
          onChange={handleChange}
          required
        />
      </div>

      {/* Estrategia / Actividad */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500">
          Estrategia (Actividad)
        </label>
        <input
          type="text"
          name="actividad"
          placeholder="Ej: Taller grupal"
          className="rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500"
          onChange={handleChange}
          required
        />
      </div>

      {/* Técnica */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500">Técnica</label>
        <select
          name="tecnica"
          className="rounded-lg border border-slate-300 p-2 text-sm outline-none"
          onChange={handleChange}
        >
          <option value="">Seleccione...</option>
          <option value="Observación">Observación</option>
          <option value="Análisis de producción">Análisis de producción</option>
          <option value="Prueba escrita">Prueba escrita</option>
          <option value="Entrevista">Entrevista</option>
        </select>
      </div>

      {/* Instrumento */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500">
          Instrumento
        </label>
        <input
          type="text"
          name="instrumento"
          placeholder="Ej: Escala de estimación"
          className="rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-indigo-500"
          onChange={handleChange}
          required
        />
      </div>

      {/* Tipo/Forma */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500">
          Tipo / Forma
        </label>
        <select
          name="tipoForma"
          className="rounded-lg border border-slate-300 p-2 text-sm font-bold text-indigo-600 outline-none"
          onChange={handleChange}
        >
          <option value="S/H">Sumativa / Heteroevaluación</option>
          <option value="S/C">Sumativa / Coevaluación</option>
          <option value="F/A">Formativa / Autoevaluación</option>
        </select>
      </div>

      {/* Porcentaje */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-500">
          Ponderación (%)
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="porcentaje"
            max="100"
            placeholder="Ej: 20"
            className="w-full rounded-lg border border-slate-300 p-2 text-sm font-bold text-indigo-500 outline-none focus:border-indigo-500"
            onChange={handleChange}
            required
          />
          <span className="font-bold text-slate-400">%</span>
        </div>
      </div>

      {/* Botón de envío */}
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-all hover:bg-indigo-600 active:scale-95"
        >
          Añadir al Plan
        </button>
      </div>
    </form>
  );
}
