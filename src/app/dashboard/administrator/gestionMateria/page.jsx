import { getAcademicLoand } from "@/actions/getAcademicLoand";
import { getSection } from "@/actions/getSection";
import { getSubject } from "@/actions/getSubject";
import { getTeachers } from "@/actions/getTeachers";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import ListAcademicLoand from "@/components/molecules/ListAcademicLoand";
import ListSubjects from "@/components/molecules/ListSubjects";
import HeaderGestionMaterias from "@/components/organism/HeaderGestionMaterias";

export default async function MateriasPage() {
  const [dataSubjects, dataTeachers, dataSection, dataAcademicLoand] =
    await Promise.all([
      getSubject(),
      getTeachers(),
      getSection(),
      getAcademicLoand(),
    ]);

  const subjects = Array.isArray(dataSubjects) ? dataSubjects : [];
  const teachers = Array.isArray(dataTeachers) ? dataTeachers : [];
  const sections = Array.isArray(dataSection.data) ? dataSection.data : [];

  return (
    <>
      {/* Componente de cliente (Botón + Modal) */}
      <HeaderGestionMaterias />

      {/* Componentes de servidor (Estáticos o con Datos) */}
      <AccionesRapidas />
      <ListSubjects />
      <ListAcademicLoand
        academicLoads={dataAcademicLoand || []}
        subjects={subjects || []}
        teachers={teachers || []}
        sections={sections || []}
      />
    </>
  );
}
