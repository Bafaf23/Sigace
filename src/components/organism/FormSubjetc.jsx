import Button from "../atom/Button";
import Input from "../atom/Input";
import Selector from "../atom/Selector";
import { registerSubject } from "@/actions/registerSubject";
import { faSpinner, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormSubjetc() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
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

    const result = await registerSubject(formData);

    if (result.success) {
      toast.success("Materia creada exitosamente");
      setFormData({ name: "", code: "", grade: "", area: "Formación General" });
    } else {
      toast.error(result.error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Nombre de la Materia"
          name="name"
          placeholder="Ej: Matemáticas"
          value={formData.name}
          onChange={(e) => handleUpdate("name", e.target.value)}
          required
        />
        <Input
          label="Código (Opcional)"
          name="code"
          placeholder="Ej: MAT-01"
          value={formData.code}
          onChange={(e) => handleUpdate("code", e.target.value)}
        />
      </div>

      <Selector
        label="Año Escolar correspondiente"
        options={gradeOptions}
        value={formData.grade}
        onChange={(e) => handleUpdate("grade", e.target.value)}
        required
      />

      <Input
        label="Área de Formación"
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
          {loading ? "Guardando..." : "Registrar Materia"}
        </Button>
      </div>
    </form>
  );
}
