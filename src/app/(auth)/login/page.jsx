"use client";
import Button from "@/components/atom/Button";
import Icon from "@/components/atom/Icon";
import Input from "@/components/atom/Input";
import Links from "@/components/atom/Links";
import {
  faKey,
  faArrowLeft,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false, // Evita que la página recargue bruscamente
    });

    if (result?.error) {
      toast.error("Correo o contraseña incorrectos");
      setLoading(false);
    } else {
      router.push("/dashboard"); // O la ruta principal de SIGACE
      router.refresh(); // Refresca para que el layout reconozca la sesión
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Botón para volver */}
        <Links
          direction="/"
          className="group mb-8 inline-flex items-center gap-2 text-slate-500 transition-colors hover:text-indigo-600"
          label={"Volver al inicio"}
          classNameIcon={"transition-transform group-hover:-translate-x-1"}
          icon={faArrowLeft}
        ></Links>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl shadow-indigo-200/50">
          <div className="mb-10 text-center">
            <h1 className="mb-2 text-3xl font-black text-indigo-900">
              SIGACE<span className="text-cyan-500">.</span>
            </h1>
            <p className="font-medium text-slate-500">
              Control de Estudios Inteligente
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Correo Electrónico"
              name="email"
              type="email"
              placeholder="ejemplo@institucion.com"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Contraseña"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />

            <div className="flex justify-between">
              <Links
                direction="/register"
                icon={faUserPlus}
                className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                label={"Registrate"}
              >
                Registrate
              </Links>
              <Links
                direction="#"
                className="text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                label={"¿Olvidaste tu contraseña?"}
              ></Links>
            </div>

            <Button
              classNameBtn="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 transition-all flex justify-center items-center gap-2"
              icon={faKey}
              type="submit"
              disabled={loading}
              children={loading ? "Verificando..." : "Iniciar Sesión"}
            ></Button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            ¿No tienes acceso?,{" "}
            <span className="cursor-pointer font-bold text-indigo-600">
              Contacta al administrador
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
