/**
 * Componente de etiqueta (Badge) para resaltar estados o categorías.
 * Permite personalizar colores mediante Tailwind y asegura un formato de texto consistente.
 * * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - El texto o contenido a mostrar dentro de la etiqueta.
 * @param {string} [props.className="bg-cyan-500/10 text-cyan-400"] - Clases de Tailwind para colores de fondo y texto.
 * @returns {JSX.Element} Un span estilizado con bordes redondeados y texto en mayúsculas.
 */
export default function Etiqueta({
  children,
  className = "bg-cyan-500/10 text-cyan-400",
}) {
  return (
    <div>
      <span
        className={`inline-block rounded-full px-3 py-1 ${className} mb-4 text-xs font-bold tracking-widest uppercase`}
      >
        {children}
      </span>
    </div>
  );
}
