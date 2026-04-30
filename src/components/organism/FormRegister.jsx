"use client";
import DataSchoolRegister from "../molecules/DataSchoolRegister";
import DataUserRegister from "../molecules/DataUserRegister";
import { StepIndicator } from "../molecules/StepIndicator";
import Button from "@/components/atom/Button";
import {
  faRightLong,
  faLeftLong,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function FormRegister() {
  const router = useRouter();
  const [passed, setPassed] = useState(1);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    tyeDocuement: "",
    document: "",
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    phone: "",
    password: "",
    passwordConfir: "",
    sig: "",
    role: "teacher",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!data.email || !data.password) {
      setLoading(false);
      toast.error("Los campos no pueden estar vacios");
      return;
    }

    if (data.password != data.passwordConfir) {
      setLoading(false);
      return toast.error("Las contrasenas no son iguales");
    }

    console.log(data);

    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        toast.success("¡Registro completado en SIGACE!");
        router.push("/");
      } else {
        console.error("Error del backend:", resData.detail);
        toast.error(resData.detail?.[0]?.msg || "Error al registrar");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error de red:", error);
      toast.error("Error de conexión con el servidor");
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="w-full rounded-2xl border border-gray-100 bg-white p-8 shadow">
        <div className="mb-2 text-center">
          <h1 className="mb-1 text-3xl font-black text-indigo-900">
            SIGACE<span className="text-cyan-500">.</span>
          </h1>
          <p className="font-medium text-slate-500">
            Control de Estudios Inteligente
          </p>
        </div>
        <StepIndicator currentStep={passed} totalSteps={2} mode={"user"} />
        <form onSubmit={handleSubmit} className="">
          {passed == 1 && (
            <DataUserRegister data={data} manejoCambio={handleChange} />
          )}

          {passed == 2 && (
            <DataSchoolRegister data={data} manejoCambio={handleChange} />
          )}

          <div className="mt-8 flex justify-between border-t border-gray-100 pt-6">
            {passed === 1 ? (
              <Link
                className="font-medium text-slate-400 hover:text-slate-600"
                href="/"
              >
                Iniciar Sesión
              </Link>
            ) : (
              <Button
                icon={faLeftLong}
                onClick={() => setPassed((p) => Math.max(1, p - 1))}
                classNameBtn={`text-slate-400 hover:text-slate-600 font-medium`}
              >
                {"Anterior"}
              </Button>
            )}

            {passed < 2 ? (
              <Button
                icon={faRightLong}
                onClick={() => setPassed((p) => Math.min(2, p + 1))}
                classNameBtn="rounded-lg bg-indigo-600 px-8 py-2 font-bold text-white transition-all hover:bg-indigo-700 active:scale-95 group flex items-center gap-3"
                classNameIcon="group-hover:translate-x-1 transition-transform duration-300"
              >
                Siguiente
              </Button>
            ) : (
              <>
                <Button
                  icon={faUserPlus}
                  type="submit"
                  disabled={loading}
                  classNameBtn="rounded-lg bg-green-600 px-8 py-2 font-bold text-white transition-all hover:bg-green-700 disabled:bg-slate-300 flex items-center gap-2 shadow-lg shadow-green-100"
                >
                  {loading ? "Procesando..." : "Registrar"}
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
