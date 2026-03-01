import Button from "../atom/Button";
import Icon from "../atom/Icon";
import {
  faUser,
  faCheckCircle,
  faTimesCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function TablaNotas({ data }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!data) {
    return (
      <div className="rounded-xl bg-white p-6 text-center text-slate-500 shadow">
        Cargando notas
      </div>
    );
  }

  const nombreLapso = data.nombre || "Sin nombre";
  const alumnos = data.alumnos || [];
  const estatus = data.estatus;
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/50 px-6 py-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">{nombreLapso}</h2>
          <p className="text-sm text-slate-500">
            Ciclo Escolar primer trimestre
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div
            className={`uppercase ${estatus == "cerrado" ? "text-orange-300/60" : "text-green-500"}`}
          >
            {estatus}
          </div>
          <Button
            classNameBtn={`hover:bg-gray-200 text-slate-600/40 p-2 rounded-md transition-transform duration-300 ${isOpen ? "" : "rotate-180"}`}
            icon={faAngleDown}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
      >
        <table className={`w-full border-collapse text-left`}>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                <Icon icon={faUser} />
                Estudiante
              </th>
              <th className="px-4 py-4 text-center text-sm font-semibold text-slate-600">
                Actividad 1 (25%)
              </th>
              <th className="px-4 py-4 text-center text-sm font-semibold text-slate-600">
                Actividad 2 (25%)
              </th>
              <th className="px-4 py-4 text-center text-sm font-semibold text-slate-600">
                Examen (50%)
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Definitiva
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Estatus
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {alumnos.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-10 text-center text-slate-400"
                >
                  No hay notas cargadas en este lapso.
                </td>
              </tr>
            ) : (
              alumnos.map((alumno, index) => {
                const n1 = parseFloat(alumno.n1) || 0;
                const n2 = parseFloat(alumno.n2) || 0;
                const n3 = parseFloat(alumno.n3) || 0;

                const definitivaNum = n1 * 0.25 + n2 * 0.25 + n3 * 0.5;
                const definitiva = definitivaNum.toFixed(1);
                const aprobado = definitivaNum >= 9.5;
                return (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-800">
                          {alumno.nombre}
                        </span>
                        <span className="text-xs text-slate-400">
                          C.I{alumno.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-slate-700">
                      {alumno.n1}
                    </td>
                    <td className="px-4 py-4 text-center text-slate-700">
                      {alumno.n2}
                    </td>
                    <td className="px-4 py-4 text-center text-slate-700">
                      {alumno.n3}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-bold`}
                      >
                        {definitiva}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-bold ${
                          aprobado
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        <Icon icon={aprobado ? faCheckCircle : faTimesCircle} />
                        {aprobado ? "Aprobado" : "Reprobado"}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
