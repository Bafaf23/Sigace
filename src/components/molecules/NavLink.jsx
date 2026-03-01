import Icon from "../atom/Icon";
import Link from "next/link";

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
        className={`text-md flex w-full items-center gap-3 rounded-lg p-2 text-gray-600/60 transition-all ${classNameLink} ${
          active
            ? "bg-white font-bold text-indigo-700"
            : "hover:bg-gray-200 hover:text-gray-700"
        }`}
      >
        <Icon icon={icon} className={classNameIcon}></Icon>
        <span className="whitespace-nowrap">{label}</span>
      </Link>
    </>
  );
}
