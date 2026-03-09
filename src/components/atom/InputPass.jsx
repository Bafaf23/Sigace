"use client";
import Button from "./Button";
import Input from "./Input";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function InputPass({
  label,
  placeholder,
  name,
  onChange,
  value,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex w-full flex-col gap-2">
      <Input
        label={label}
        placeholder={placeholder}
        value={value}
        type={showPassword ? "text" : "password"}
        name={name}
        onChange={onChange}
      />

      <Button
        onClick={() => {
          setShowPassword(!showPassword);
        }}
        classNameBtn={
          "absolute right-4 top-[38px] text-slate-400 hover:text-cyan-600 transition-colors"
        }
        icon={showPassword ? faEyeSlash : faEye}
        type={"button"}
      />
    </div>
  );
}
