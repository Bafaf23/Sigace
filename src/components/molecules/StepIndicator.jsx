"use client";
import { Check } from "lucide-react";

export const StepIndicator = ({ currentStep, totalSteps = 6 }) => {
  const steps = [
    { id: 1, label: "Personal" },
    { id: 2, label: "Ubicación" },
    { id: 3, label: "Salud" },
    { id: 4, label: "Padres" },
    { id: 5, label: "Representante" },
    { id: 6, label: "Inicio de sesión" },
  ];

  return (
    <div className="mb-10 w-full py-4">
      {/* Contenedor principal con padding para que las etiquetas no se corten */}
      <div className="relative flex items-center justify-between px-5">
        {/* LÍNEA DE FONDO Y PROGRESO */}
        {/* El left-5 y right-5 aseguran que la línea empiece y termine en el CENTRO de los círculos extremos */}
        <div className="absolute top-1/2 right-5 left-5 z-0 h-0.5 -translate-y-1/2 bg-slate-200">
          <div
            className="h-full bg-indigo-600 transition-all duration-500 ease-in-out"
            style={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            }}
          />
        </div>

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Círculo */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isCompleted
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : isActive
                      ? "border-indigo-600 bg-white text-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,0.1)]"
                      : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {isCompleted ? (
                  <Check size={20} strokeWidth={3} />
                ) : (
                  <span className="font-bold">{step.id}</span>
                )}
              </div>

              {/* Etiqueta */}
              <span
                className={`absolute -bottom-7 text-[10px] font-semibold whitespace-nowrap transition-colors duration-300 sm:text-xs ${
                  isActive ? "text-indigo-700" : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
