import Selector from "../atom/Selector";
import Icon from "../atom/Icon";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { getSchools } from "../../services/getSchool";
import { useEffect, useState } from "react";

export default function EnrollmentSchool() {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const data = await getSchools();
        setSchools(data);
      } catch (error) {
        console.error("Error al obtener las instituciones:", error);
      }
    };
    fetchSchools();
  }, []);
  return (
    <div className="animate-fade-in space-y-4">
      <hr className="border border-slate-100" />
      <div className="flex items-center gap-4 mb-4 p-5 rounded-xl border border-indigo-200 bg-indigo-50">
        <Icon icon={faHandPointer} className="text-2xl text-indigo-600" />
        <p className="text-sm font-semibold text-indigo-600">
          Seleciona la institución en la cual te vas a registrar. Si no
          encuentras tu liceo, contacta al departamento de control de estudios
          de tu institución.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Selector
          label={"Seleciona el liceo en el cual te vas a registar."}
          options={schools.map((school) => ({
            value: school.code_sig,
            label: school.name,
          }))}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
