"use client";
import Button from "./Button";
import { useState } from "react";
import Input from "./Input";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export default function InputPass({ label, placeholder, name, onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-2 w-full relative">
      <Input
        label={label}
        placeholder={placeholder}
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
