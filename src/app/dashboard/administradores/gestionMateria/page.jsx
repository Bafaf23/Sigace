import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import ListSubjects from "@/components/molecules/ListSubjects";
import HeaderGestionMaterias from "@/components/organism/HeaderGestionMaterias";

export default function MateriasPage() {
  return (
    <>
      {/* Componente de cliente (Botón + Modal) */}
      <HeaderGestionMaterias />

      {/* Componentes de servidor (Estáticos o con Datos) */}
      <AccionesRapidas />
      <ListSubjects />
    </>
  );
}
