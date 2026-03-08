import Icon from "./Icon";
import Link from "next/link";

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
