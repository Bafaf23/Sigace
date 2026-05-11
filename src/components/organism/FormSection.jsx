import Button from "../atom/Button";
import Input from "../atom/Input";
import Selector from "../atom/Selector";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getTeachersAll } from "@/services/getTeachersAll";
import { useAuth } from "@/context/AuthContext";

export default function FormSection() {
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([
    {
      value: "",
      label: "",
    },
  ]);
  const [formData, setFormData] = useState({
    grade: "",
    identifier: "",
    teacherId: "",
    capacity: 35,
  });

  const { user } = useAuth();

  const school_id = user.user.school_id;

  const handleUpdate = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  useEffect(() => {
    getTeachersAll(school_id).then((data) => {
      setTeachers(data);
    });
  }, []);

  console.log(teachers);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = { success: true };
    if (result.success) {
      toast.success("¡Sección creada con éxito!");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-2">
      <div className="grid grid-cols-2 gap-2">
        <Selector
          options={gradeOptions}
          name={"grade"}
          label={"Seleciona un año"}
          onChange={(e) => handleUpdate("grade", e.target.value)}
          value={formData.grade || ""}
        />
        <Selector
          options={identifierOptions}
          name={"identifier"}
          label={"Selecciona la sección"}
          onChange={(e) => handleUpdate("identifier", e.target.value)}
          value={formData.identifier}
        />
        {/* Fila 2: Docente Guía (Ocupa todo el ancho) */}
        <div className="col-span-2">
          <Selector
            options={teachers}
            name="teacherId"
            label="Asignar Docente Guía"
            onChange={(e) => handleUpdate("teacherId", e.target.value)}
            value={formData.teacherId}
          />
        </div>
        <div className="col-span-2">
          <Input
            type="number"
            name="capacity"
            label="Capacidad Máxima (Cupos)"
            placeholder="Ej: 35"
            value={formData.capacity}
            onChange={(e) => handleUpdate("capacity", e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          type="submit"
          disabled={loading}
          icon={loading ? faSpinner : faCheck} // Cambia el icono si está cargando
          classNameBtn={`rounded-lg px-8 py-2 font-bold text-white transition-all 
            ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-indigo-600 hover:shadow-lg active:scale-95"}`}
        >
          {loading ? "Cargando..." : "Crear Sección"}
        </Button>
      </div>
    </form>
  );
}
