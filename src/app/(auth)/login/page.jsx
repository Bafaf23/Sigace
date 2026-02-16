"use client";
import { useState } from "react";
import Input from "@/components/atom/Input";
import Button from "@/components/atom/Button";
import Icon from "@/components/atom/Icon";
import {
  faKey,
  faEnvelope,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de SIGACE:", formData);
    // Aquí conectarías con tu API más adelante
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Botón para volver */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors group"
        >
          <Icon
            icon={faArrowLeft}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Volver al inicio</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-200/50 p-8 border border-gray-200">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-indigo-900 mb-2">
              SIGACE<span className="text-cyan-500">.</span>
            </h1>
            <p className="text-slate-500 font-medium">
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
              <Link
                href="/register"
                className="text-sm font-semibold text-cyan-600 hover:text-cyan-700"
              >
                Registrate
              </Link>
              <a
                href="#"
                className="text-sm font-semibold text-cyan-600 hover:text-cyan-700"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button
              classNameBtn="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 transition-all flex justify-center items-center gap-2"
              icon={faKey}
              type="submit"
            >
              Iniciar Sesión
            </Button>
          </form>

          <p className="text-center mt-8 text-slate-500 text-sm">
            ¿No tienes acceso?,
            <span className="text-indigo-600 font-bold cursor-pointer">
              Contacta al administrador
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
