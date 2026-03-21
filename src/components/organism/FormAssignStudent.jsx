import Button from "../atom/Button";
import Selector from "../atom/Selector";
import { assignSection } from "@/actions/assignSection";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormAssignStudent({ students, id }) {
  console.log("este es el Id de la section", id);
  const [loading, setLoading] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedStudent) {
      return toast.error("Por favor, selecciona un alumno");
    }

    setLoading(true);

    const studentId = Number(selectedStudent);
    const sectionId = Number(id);

    const result = await assignSection(studentId, sectionId);

    if (result.success) {
      toast.success("Alumno asignado con éxito");
      setSelectedStudent("");
    } else {
      toast.error(result.error);
    }
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-2">
      <Selector
        label={"Seleciona un alumno"}
        options={students.map((s) => ({
          value: s.id,
          label: s.user ? `${s.user.name} ${s.user.lastName}` : `sin datos`,
        }))}
        value={String(selectedStudent)}
        onChange={(e) => setSelectedStudent(e.target.value)}
      />

      <div className="rounded-lg bg-blue-50 p-3 text-xs text-blue-600">
        Se inscribirá automáticamente en la sección actual.
      </div>

      <Button
        icon={faUser}
        type="submit"
        disabled={loading || students.length === 0}
        classNameBtn="w-full rounded-lg bg-indigo-600 py-2 font-bold text-white transition-all hover:bg-indigo-700 disabled:bg-slate-300"
      >
        {loading ? "Registrando..." : "Confirmar Inscripción"}
      </Button>
    </form>
  );
}
