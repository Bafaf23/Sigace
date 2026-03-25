/**
 * Icono reutilizable y personalizable mediante clases de Tailwind.
 * Actúa como un wrapper de FontAwesome para facilitar el mantenimiento.
 * @component
 * @typedef {Object} IconConfig
 * @property {Object} icon - Referencia del icono de FA.
 * @property {string} [className="text-primary"] - Estilo visual.
 * @property {boolean} [spin=false] - Define si el icono debe rotar.
 * @returns {JSX.Element} El icono renderizado con los estilos aplicados.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, className = "text-md" }) {
  return <FontAwesomeIcon icon={icon} className={className}></FontAwesomeIcon>;
}
