import Icon from "./Icon";

/**
 * Tarjeta de estado (KPI) adaptable para visualización de métricas.
 * Soporta integración con el componente Icon y estilos personalizados. (Pagina Web)
 * * @component
 * @param {object} props
 * @param {string} props.titel - El título o etiqueta de la métrica (ej: "Total Estudiantes").
 * @param {string|number} props.info - El dato principal a resaltar (ej: "450").
 * @param {object} props.icon - El objeto de icono de FontAwesome.
 * @param {string} [props.className] - Clases de Tailwind adicionales para el contenedor.
 * @returns {JSX.Element} Una tarjeta con icono, dato destacado y etiqueta.
 */

export default function CardEstado({ titel, info, icon, className }) {
  return (
    <div>
      <div
        className={`${className} rounded-2xl border border-gray-200 bg-white p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/50`}
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/40 text-cyan-500">
          <Icon icon={icon} className={"text-xl"} />
        </div>
        <h3 className="text-2xl font-bold text-cyan-500">{info}</h3>
        <p className="text-sm text-gray-400">{titel}</p>
      </div>
    </div>
  );
}
