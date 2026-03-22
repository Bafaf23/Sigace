"use client";
import Button from "../atom/Button";
// Ajusta la ruta si es necesario
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SubjectActions({ subject }) {
  return (
    <div className="flex justify-end gap-2">
      <Button
        icon={faEdit}
        classNameBtn="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-indigo-50 hover:text-indigo-600"
        onClick={() => console.log("Editar:", subject.id)}
      />
      <Button
        icon={faTrash}
        classNameBtn="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-all hover:bg-red-50 hover:text-red-600"
        onClick={() => confirm(`¿Eliminar ${subject.name}?`)}
      />
    </div>
  );
}
