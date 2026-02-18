"use client";
import Icon from "./Icon";
export default function Button({
  classNameBtn,
  children,
  classNameIcon,
  icon,
  onClick,
  disabled,
  type,
}) {
  return (
    <button
      className={classNameBtn}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <Icon icon={icon} className={classNameIcon}></Icon>
      {children}
    </button>
  );
}
