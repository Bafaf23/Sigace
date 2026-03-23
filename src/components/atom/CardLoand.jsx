"use client";
import Icon from "../atom/Icon";
import Button from "./Button";
import {
  faUserTie,
  faLayerGroup,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function CardLoand({ load }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Cabecera: Materia */}
      <div className="mb-4">
        <span className="text-xs font-semibold tracking-wider text-indigo-500 uppercase">
          {load.subject.code}
        </span>
        <h3 className="text-lg font-bold text-indigo-600 dark:text-slate-300">
          {load.subject.name}
        </h3>
      </div>

      {/* Info: Profesor y Sección */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Icon icon={faUserTie} className="text-slate-400" />
          <span>
            {load.teacher.user.name} {load.teacher.user.lastName}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Icon icon={faLayerGroup} className="text-slate-400" />
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium dark:bg-slate-700">
            {load.section.grade} "{load.section.identifier}"
          </span>
        </div>
      </div>

      {/* Acciones */}
      <div className="mt-auto flex justify-end gap-2 border-t border-slate-300 pt-4 dark:border-slate-700">
        <Button
          icon={faEdit}
          classNameBtn="p-2 text-slate-400 transition-colors hover:text-indigo-600"
        ></Button>
        <Button
          icon={faTrash}
          classNameBtn="p-2 text-slate-400 transition-colors hover:text-red-600"
        ></Button>
      </div>
    </div>
  );
}
