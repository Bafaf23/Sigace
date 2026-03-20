"use client";
import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import InputPass from "@/components/atom/InputPass";
import Links from "@/components/atom/Links";
import {
  faKey,
  faArrowLeft,
  faUserPlus,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function FromLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password)
      return toast.error("Por favor, introduce tu correo y contraseña");

    setLoading(true);

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (result?.error) {
      toast.error("Correo o contraseña incorrectos");
      setLoading(false);
    } else {
      const session = await getSession();
      const role = session?.user?.role;

      console.log("Rol detectado en la sesión:", role);

      if (role === "TEACHER") {
        router.push("/dashboard/profesor");
      } else if (role === "STUDENT") {
        router.push("/dashboard/estudiante");
      } else if (role === "ADMIN") {
        router.push("/dashboard/administradores");
      } else {
        console.warn("El rol no coincide con TEACHER ni STUDENT:", role);
      }
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Botón para volver */}
      <Links
        direction="/"
        className="group mb-8 inline-flex items-center gap-2 text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400"
        label={"Volver al inicio"}
        classNameIcon={"transition-transform group-hover:-translate-x-1 "}
        icon={faArrowLeft}
      ></Links>

      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl shadow-indigo-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-indigo-600/20">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-3xl font-black text-indigo-900 dark:text-indigo-600">
            SIGACE<span className="text-cyan-500">.</span>
          </h1>
          <p className="font-medium text-slate-500 dark:text-slate-300">
            Control de Estudios Inteligente
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Correo Electrónico"
            name="email"
            type="email"
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={handleChange}
          />

          <InputPass
            label="Contraseña"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="flex items-center justify-between gap-2">
            <Links
              direction="/register"
              icon={faUserPlus}
              className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
              label={"Registrate"}
            >
              Registrate
            </Links>
            <Links
              icon={faKey}
              direction="#"
              className="col-span-2 col-start-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
              label={"¿Olvidaste tu contraseña?"}
            ></Links>
          </div>

          <Button
            classNameBtn="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 dark:shadow-indigo-500/30 transition-all flex justify-center items-center gap-2"
            icon={faKey}
            type="submit"
            disabled={loading}
            children={loading ? "Verificando..." : "Iniciar Sesión"}
          ></Button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          ¿No tienes acceso?,{" "}
          <span className="cursor-pointer font-bold text-indigo-600 dark:text-indigo-500">
            Contacta al administrador
          </span>
        </p>
      </div>
    </div>
  );
}
