import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Icon({ icon, className = "text-md" }) {
  return <FontAwesomeIcon icon={icon} className={className}></FontAwesomeIcon>;
}
