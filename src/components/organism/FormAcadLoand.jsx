import Button from "../atom/Button";
import Selector from "../atom/Selector";
import { assingAcademicLoand } from "@/actions/assingAcademicLoand";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormAcadLoand({ subjects, teachers, sections }) {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTeachers, setSelectedTeachers] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [loading, setLoanding] = useState(false);
  console.log("Estructura de la primera sección:", sections[0]);

  const handleSubmit = async (formData) => {
    setLoanding(true);

    try {
      const result = await assingAcademicLoand(formData);

      if (result.success) {
        setSelectedSubject("");
        setSelectedTeachers("");
        setSelectedSection("");
        toast.success("¡Carga guardada con éxito!");
      }
    } catch {
      toast.error("Hubo un error,", result.error);
      console.error("Error al enviar:", result.error);
    }

    setLoanding(false);
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-2">
        <Selector
          label={"Seleciona una materia"}
          name="subjectId"
          id={"subjectId"}
          options={subjects.map((su) => ({
            value: su.id,
            label: `${su.name} - ${su.grade}`,
          }))}
          onChange={(e) => setSelectedSubject(e.target.value)}
          value={selectedSubject}
        />
        <Selector
          label={"Seleciona una materia"}
          id={"teacherId"}
          options={teachers}
          name="teacherId"
          value={selectedTeachers}
          onChange={(e) => {
            setSelectedTeachers(e.target.value);
          }}
        />
      </div>
      <div>
        <Selector
          label={"Seleciona una Seccion"}
          id={"sectionId"}
          options={sections.map((sect) => ({
            value: sect.id,
            label: `${sect.grade} - ${sect.identifier}`,
          }))}
          name="sectionId"
          value={selectedSection}
          onChange={(e) => {
            setSelectedSection(e.target.value);
          }}
        />
      </div>
      <Button
        type="submit"
        icon={faSave}
        classNameBtn="bg-indigo-600 text-white p-2 rounded-lg mt-2"
      >
        Guardar Carga Académica
      </Button>
    </form>
  );
}
