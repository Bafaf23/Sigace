import Link from "next/link";
import Icon from "../atom/Icon";
export default function NavLink({
  direcction,
  label,
  icon,
  classNameIcon,
  classNameLink,
}) {
  return (
    <>
      <Link href={direcction} className={classNameLink}>
        <Icon icon={icon} className={classNameIcon}></Icon>
        <span>{label}</span>
      </Link>
    </>
  );
}
