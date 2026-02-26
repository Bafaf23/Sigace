"use client";
import Icon from "./Icon";
export default function Button({
  classNameBtn,
  children,
  classNameIcon,
  icon,
  onClick,
  disabled,
  type = "button",
  isCollapsed,
}) {
  return (
    <button
      className={`${classNameBtn}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <Icon icon={icon} className={classNameIcon}></Icon>
      {!isCollapsed && <span className="whitespace-nowrap">{children}</span>}
    </button>
  );
}
