import Icon from "./Icon";
import Link from "next/link";

/**
 * Link con soporte al componente Icon, estilabe para mayor comodiddd
 *
 * @component
 * @param {object} props
 * @param {string} props.direction - Enlace de direccion interno o esterno
 * @param {string} props.icon - Componente Icon
 * @param {string} props.className - Class prrsonalisabes de tailwind
 * @param {string} props.label - titulo del link
 * @param {string} props.classNameIcon - Class para personalizar el Icon
 * @returns {JSX.Element}
 */

export default function Links({
  direction,
  icon,
  className,
  label,
  classNameIcon,
}) {
  return (
    <Link href={direction} className={className}>
      <Icon icon={icon} className={classNameIcon} />
      {label}
    </Link>
  );
}
