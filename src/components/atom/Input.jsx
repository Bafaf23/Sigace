"use client";

export default function Input({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="ml-1 text-sm font-semibold text-slate-600">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onWheel={(e) => e.target.blur()}
        onChange={onChange}
        placeholder={placeholder}
        className="relative w-full [appearance:textfield] rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </div>
  );
}
