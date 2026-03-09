"use client";
import Button from "../atom/Button";
import AcademicFields from "../molecules/AcademicBackgroundFields";
import HealthPhysicalFields from "../molecules/HealthPhysicalFields";
import LegalRepresentativeFields from "../molecules/LegalRepresentativeFields";
import LocationFields from "../molecules/LocationFields";
import ParentsFields from "../molecules/ParentsFields";
import PersonalDataFields from "../molecules/PersonalDataFields";
import { StepIndicator } from "../molecules/StepIndicator";
import { enrollment } from "@/actions/enrollment";
import {
  faLeftLong,
  faRightLong,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FormInscrip() {
  const router = useRouter();

  const [passed, setPassed] = useState(1);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    // Paso 1: Personales + Académicos
    dniType: "",
    dni: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
    pass: "",
    isNewEntry: false,
    previousSchool: "",
    previousSchoolCode: "",
    previousYear: "",
    previousSection: "",

    year: "",
    section: "",

    // Paso 2: Ubicación
    state: "",
    municipality: "",
    parish: "",
    addressDetail: "",
    housingCondition: "",

    // Paso 3: Salud
    bloodType: "",
    allergies: "",
    shirtSize: "",
    pantSize: "",
    shoeSize: "",
    weight: "",
    medicalCondition: "",
    height: "",

    // Paso 4: Padres
    motherName: "",
    motherDni: "",
    motherEmail: "",
    motherPhone: "",

    fatherName: "",
    fatherDni: "",
    fatherEmail: "",
    fatherPhone: "",

    // Paso 5: Representante
    repDni: "",
    repName: "",
    repLastName: "",
    repPhone: "",
    relationship: "",
    repEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (loading) return;

    if (!data.dni || !data.name || !data.lastName) {
      return toast.error(
        "Por favor, rellena los campos obligatorios del estudiante.",
      );
    }

    setLoading(true);

    const datosFinales = {
      ...data,
      dni: `${data.dniType}${data.dni}`,
    };

    try {
      const result = await enrollment(datosFinales);
      if (result.success) {
        toast.success("¡Inscripción procesada con éxito!");

        setTimeout(() => {
          router.push("/enrollment/success");
        }, 1500);
      } else {
        toast.error(result.error || "Hubo un error al registrar.");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  console.log("Estado actual de SIGACE:", data);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl rounded-2xl border border-slate-100 bg-white p-8 shadow-lg"
    >
      <StepIndicator currentStep={passed} totalSteps={5} />

      <div className="mt-6 min-h-[400px]">
        {passed === 1 && (
          <div className="animate-in fade-in space-y-8 duration-500">
            <PersonalDataFields datos={data} manejarCambio={handleChange} />
            <AcademicFields datos={data} manejarCambio={handleChange} />
          </div>
        )}

        {passed === 2 && (
          <div className="animate-in slide-in-from-right-4 duration-300">
            <LocationFields datos={data} manejarCambio={handleChange} />
          </div>
        )}

        {passed === 3 && (
          <HealthPhysicalFields datos={data} manejarCambio={handleChange} />
        )}
        {passed === 4 && (
          <ParentsFields datos={data} manejarCambio={handleChange} />
        )}
        {passed === 5 && (
          <LegalRepresentativeFields
            datos={data}
            manejarCambio={handleChange}
          />
        )}
      </div>

      <div className="mt-8 flex justify-between border-t border-gray-100 pt-6">
        <Button
          icon={faLeftLong}
          onClick={() => setPassed((p) => Math.max(1, p - 1))}
          classNameBtn={`text-slate-400 hover:text-slate-600 font-medium ${passed === 1 ? "invisible" : ""}`}
        >
          Anterior
        </Button>

        {passed < 5 ? (
          <Button
            icon={faRightLong}
            onClick={() => setPassed((p) => Math.min(5, p + 1))}
            classNameBtn="rounded-lg bg-indigo-600 px-8 py-2 font-bold text-white transition-all hover:bg-indigo-700 active:scale-95 group flex items-center gap-3"
            classNameIcon="group-hover:translate-x-1 transition-transform duration-300"
          >
            Siguiente
          </Button>
        ) : (
          <Button
            icon={faUserPlus}
            type="submit"
            disabled={loading}
            classNameBtn="rounded-lg bg-green-600 px-8 py-2 font-bold text-white transition-all hover:bg-green-700 disabled:bg-slate-300 flex items-center gap-2 shadow-lg shadow-green-100"
          >
            {loading ? "Procesando..." : "Finalizar Inscripción"}
          </Button>
        )}
      </div>
    </form>
  );
}
