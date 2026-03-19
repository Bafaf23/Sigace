import Button from "@/components/atom/Button";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function MateriasPage() {
  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:p-3 lg:justify-between">
        <HeaderDashbord titelPage={"Materias"} />
        <div className="p-3">
          <Button
            icon={faAdd}
            classNameBtn={
              "bg-indigo-500 p-2 rounded-md text-slate-50 font-bold cursor-pointer flex items-center gap-1"
            }
          >
            {"Cargar materia"}
          </Button>
        </div>
      </div>
      <AccionesRapidas />
    </>
  );
}
