import Button from "../atom/Button";
import Input from "../atom/Input";
import Selector from "../atom/Selector";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function FormSection() {
  const gradeOptions = [
    { value: "1ero", label: "1er Año" },
    { value: "2do", label: "2do Año" },
    { value: "3ero", label: "3er Año" },
    { value: "4to", label: "4to Año" },
    { value: "5to", label: "5to Año" },
  ];
  const identifierOptions = [
    { value: "A", label: "Sección A" },
    { value: "B", label: "Sección B" },
    { value: "C", label: "Sección C" },
    { value: "U", label: "Sección Única (U)" },
  ];
  const teacherOptions = [
    { value: "1", label: "Carlos Uzcátegui" },
    { value: "2", label: "Elena Blanco" },
  ];
  return (
    <form action="#" className="space-y-6 p-2">
      <div className="grid grid-cols-2 gap-2">
        <Selector
          options={gradeOptions}
          name={"grade"}
          label={"Seleciona un año"}
        />
        <Selector
          options={identifierOptions}
          name={"identifier"}
          label={"Selecciona la sección"}
        />
        {/* Fila 2: Docente Guía (Ocupa todo el ancho) */}
        <div className="col-span-2">
          <Selector
            options={teacherOptions}
            name="teacherId"
            label="Asignar Docente Guía"
          />
        </div>
        <div className="col-span-2">
          <Input
            type="number"
            name="capacity"
            label="Capacidad Máxima (Cupos)"
            placeholder="Ej: 35"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          icon={faCheck}
          classNameBtn="rounded-lg bg-indigo-600 px-8 py-2 font-bold text-white transition-all hover:shadow-lg"
        >
          {"Crear Sección"}
        </Button>
      </div>
    </form>
  );
}
