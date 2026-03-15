"use client";

import { register } from "@/actions/register";
import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import InputPass from "@/components/atom/InputPass";
import Links from "@/components/atom/Links";
import SelectorInput from "@/components/molecules/SelectorInput";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function FormRegister() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [typeDni, seytTypeDni] = useState({
    type: "V-",
    number: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    seytTypeDni((prev) => ({
      ...prev,
      [name === "option" ? "type" : "number"]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const rawDatos = Object.fromEntries(formData);
    const datosFinales = {
      ...rawDatos,
      dni: `${rawDatos.option}${rawDatos.number}`,
    };

    const respuesta = await register(datosFinales);

    if (respuesta.success) {
      toast.success("¡Registro completado en SIGACE!");
      router.push("/login");
    } else {
      toast.error(respuesta.error || "Error al registrar");
      setLoading(false);
    }
  }
  const options = [
    {
      label: "Cedula",
      value: "V-",
    },
    {
      label: "Extranjero",
      value: "E-",
    },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Links
          direction={"/login"}
          icon={faArrowLeft}
          className={
            "group mb-8 inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600"
          }
          classNameIcon={"group-hover:-translate-x-1 transition-transform"}
          label={"Volver"}
        />
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow">
          {/* encabezado del formulario */}
          <div className="mb-10 text-center">
            <h1 className="mb-2 text-3xl font-black text-indigo-900">
              SIGACE<span className="text-cyan-500">.</span>
            </h1>
            <p className="font-medium text-slate-500">
              Control de Estudios Inteligente
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <SelectorInput
              label={"Tipo de Identidad"}
              name={"option"}
              nameInput={"number"}
              options={options}
              id={"optionId"}
              placeholder={"3242343"}
              valueSel={typeDni.type}
              valueInput={typeDni.number}
              onChange={change}
            />
            <div className="flex gap-2">
              <Input
                label={"Nombre"}
                type={"text"}
                placeholder={"Mario"}
                name={"name"}
              />
              <Input
                label={"Apellido"}
                type={"text"}
                placeholder={"Sanchez"}
                name={"lastName"}
              />
            </div>
            <Input
              label={"Correo Electronico"}
              type={"email"}
              placeholder={"usuario@ejemplo.com"}
              name={"email"}
            />
            <Input
              label={"Telefono"}
              type={"text"}
              placeholder={"0424..."}
              name={"phone"}
            />
            <Input
              label={"Fecha de Nacimiento"}
              type={"date"}
              placeholder={"23-09-2003"}
              name={"birthdate"}
            />

            <InputPass
              label={"Contrasena"}
              placeholder={"******"}
              name={"password"}
            />

            <Button
              classNameBtn={
                "bg-indigo-600 w-full p-2 rounded-md text-slate-50 font-bold"
              }
              type={"submit"}
              disabled={loading}
              children={loading ? "Registrando..." : "Registrar"}
              icon={faUser}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
