import Button from "../atom/Button";
import Input from "../atom/Input";
import Selector from "../atom/Selector";
import { faSpinner, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormSubject({ schoolId, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    schoolId: schoolId,
    grade: "",
    area: "Formación General",
  });

  const gradeOptions = [
    { value: "1ero", label: "1er Año" },
    { value: "2do", label: "2do Año" },
    { value: "3ero", label: "3er Año" },
    { value: "4to", label: "4to Año" },
    { value: "5to", label: "5to Año" },
  ];

  const handleUpdate = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await fetch("http://127.0.0.1:5000/subject/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (result.ok) {
        toast.success("Asignatura creada exitosamente");
        setFormData({
          name: "",
          code: "",
          schoolId: schoolId,
          grade: "",
          area: "Formación General",
        });
        onSuccess?.();
      } else {
        toast.error("Error al crear la asignatura");
        console.error("Error al crear la asignatura:", result.error);
      }
    } catch (error) {
      toast.error("Error al crear la asignatura");
      console.error("Error al crear la asignatura:", error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Nombre de la Asignatura"
          name="name"
          placeholder="Ej: Matemáticas"
          value={formData.name}
          onChange={(e) => handleUpdate("name", e.target.value)}
          required
        />
        <Input
          label="Código de la Asignatura"
          name="code"
          placeholder="Ej: MAT-01"
          value={formData.code}
          onChange={(e) => handleUpdate("code", e.target.value)}
        />
      </div>

      <Selector
        label="Año Escolar de la Asignatura"
        options={gradeOptions}
        value={formData.grade}
        onChange={(e) => handleUpdate("grade", e.target.value)}
        required
      />

      <Input
        label="Área de Formación de la Asignatura"
        name="area"
        placeholder="Ej: Ciencias Naturales"
        value={formData.area}
        onChange={(e) => handleUpdate("area", e.target.value)}
      />

      <div className="flex justify-end pt-4">
        <Button
          type="submit"
          disabled={loading}
          icon={loading ? faSpinner : faSave}
          classNameBtn={`w-full md:w-auto rounded-xl px-10 py-3 font-bold text-white transition-all 
          ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-md"}`}
        >
          {loading ? "Guardando..." : "Registrar Asignatura"}
        </Button>
      </div>
    </form>
  );
}
