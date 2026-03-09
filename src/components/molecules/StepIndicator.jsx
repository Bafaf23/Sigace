"use client";
import { Check } from "lucide-react";

export const StepIndicator = ({ currentStep, totalSteps = 5 }) => {
  const steps = [
    { id: 1, label: "Personal" },
    { id: 2, label: "Ubicación" },
    { id: 3, label: "Salud" },
    { id: 4, label: "Padres" },
    { id: 5, label: "Representante" },
  ];

  return (
    <div className="mb-8 w-full py-4">
      <div className="relative flex items-center justify-between">
        {/* Línea de fondo (conecta los círculos) */}
        <div className="absolute top-1/2 left-0 z-0 h-0.5 w-full -translate-y-1/2 bg-slate-200" />

        {/* Línea de progreso activa */}
        <div
          className="absolute top-1/2 left-0 z-0 h-0.5 -translate-y-1/2 bg-indigo-600 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Círculo del paso */}
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

              {/* Etiqueta del paso (oculta en móviles muy pequeños si prefieres) */}
              <span
                className={`absolute -bottom-7 text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${
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
