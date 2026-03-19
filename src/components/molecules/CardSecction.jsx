import Button from "../atom/Button";
import Icon from "../atom/Icon";
import {
  faUsers,
  faChalkboardUser,
  faFilePdf,
  faPenToSquare,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function CardSecction({
  grade,
  identifier,
  teacher,
  current,
  max,
}) {
  const isFull = current >= max;
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-lg">
      {/* Encabezado: Año y Sección */}
      <div className="flex items-center justify-between bg-indigo-600 p-4 text-white">
        <h3 className="text-xl font-bold">
          {grade} "{identifier}"
        </h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${isFull ? "bg-red-500" : "bg-green-500"}`}
        >
          {isFull ? "LLENO" : "DISPONIBLE"}
        </span>
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="space-y-4 p-4">
        {/* Info del Guía */}
        <div className="flex items-center gap-3 text-slate-600">
          <Icon icon={faChalkboardUser} className="w-5 text-indigo-500" />
          <div>
            <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Docente Guía
            </p>
            <p className="text-sm font-medium">{teacher || "No asignado"}</p>
          </div>
        </div>

        {/* Info de Capacidad (Barra de progreso estilo Retail) */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1">
              <Icon icon={faUsers} /> Capacidad: {current}/{max}
            </span>
            <span>{Math.round((current / max) * 100)}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div
              className={`h-2 rounded-full transition-all ${isFull ? "bg-red-500" : "bg-indigo-500"}`}
              style={{ width: `${(current / max) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Acciones Rápidas (Footer) */}
      <div className="flex justify-around border-t border-slate-100 bg-slate-50 p-3">
        <Button
          icon={faFilePdf}
          classNameBtn="text-slate-500 transition-colors hover:text-indigo-600"
        >
          {"Ver lista de alumnos"}
        </Button>
        <Button
          icon={faUserPlus}
          classNameBtn="text-slate-500 transition-colors hover:text-green-600"
        >
          {"Inscribir en esta sección"}
        </Button>
        <Button
          icon={faPenToSquare}
          classNameBtn="text-slate-500 transition-colors hover:text-orange-500"
        >
          {"Editar sección"}
        </Button>
      </div>
    </div>
  );
}
