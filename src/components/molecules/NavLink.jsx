import Link from "next/link";
import Icon from "../atom/Icon";
export default function NavLink({
  direcction,
  label,
  icon,
  classNameIcon,
  classNameLink,
  active,
}) {
  return (
    <>
      <Link
        href={direcction}
        className={`hover:bg-gray-200 hover:text-gray-700  p-2 flex items-center gap-3 w-full text-md text-gray-600/60 rounded-lg transition-all ${classNameLink} ${
          active ? "bg-white text-indigo-700 font-bold" : ""
        }`}
      >
        <Icon icon={icon} className={classNameIcon}></Icon>
        <span className="whitespace-nowrap">{label}</span>
      </Link>
    </>
  );
}
