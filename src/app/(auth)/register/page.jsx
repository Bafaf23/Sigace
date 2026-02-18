"use client";
import { useRouter } from "next/navigation"; // 1. Importación necesaria
import { useState } from "react"; // ✅ ¡No olvides esta línea!
import NavLink from "@/components/molecules/NavLink";
import { faArrowLeft, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import Selector from "@/components/molecules/Selector";
import Input from "@/components/atom/Input";
import InputPass from "@/components/atom/InputPass";
import Button from "@/components/atom/Button";
import { register } from "@/actions/register";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter(); // 2. Inicialización del hook

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const rawDatos = Object.fromEntries(formData);

    // 3. Unir el tipo de identidad con el número
    // Ejemplo: "V-" + "12345678" => "V-12345678"
    const datosFinales = {
      ...rawDatos,
      dniUsuario: `${rawDatos.typeDni}${rawDatos.dniUsuario}`,
    };

    const respuesta = await register(datosFinales);

    if (respuesta.success) {
      toast.success("¡Registro completado en SIGACE!");
      router.push("/login");
    } else {
      toast.error(
        `Hubo un error ${respuesta.error}` || "Hubo un error al registrar"
      );
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
    {
      label: "Cedula Escolar",
      value: "ID-",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md">
        <NavLink
          direcction={"/login"}
          icon={faArrowLeft}
          classNameLink={
            "hover:text-indigo-600 group inline-flex gap-2 items-center mb-8 text-slate-500"
          }
          classNameIcon={"group-hover:-translate-x-1 transition-transform"}
          label={"Volver"}
        />
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-5 ">
          {/* encabezado del formulario */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-indigo-900 mb-2">
              SIGACE<span className="text-cyan-500">.</span>
            </h1>
            <p className="text-slate-500 font-medium">
              Control de Estudios Inteligente
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Selector
              label={"Tipo de Identidad"}
              options={options}
              name={"typeDni"}
              nameInput={"dniUsuario"}
              id={"optionId"}
              placeholder={"3242343"}
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
