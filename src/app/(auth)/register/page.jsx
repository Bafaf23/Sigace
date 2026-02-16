import NavLink from "@/components/molecules/NavLink";
import { faArrowLeft, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import Selector from "@/components/molecules/Selector";
import Input from "@/components/atom/Input";
import InputPass from "@/components/atom/InputPass";
import Button from "@/components/atom/Button";

export default function register() {
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
          <form action="#" className="space-y-6">
            <Selector
              label={"Tipo de Identidad"}
              options={options}
              name={"optionIdentidad"}
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
              type={"emal"}
              placeholder={"usuario@ejemplo.com"}
            />
            <InputPass
              label={"Contrasena"}
              placeholder={"******"}
              name={"pass"}
            />

            <Button
              classNameBtn={
                "bg-indigo-600 w-full p-2 rounded-md text-slate-50 font-bold"
              }
              children={"Resgistar"}
              icon={faUser}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
