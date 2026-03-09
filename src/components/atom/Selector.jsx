"use client";
export default function Selector({
  id,
  name,
  label,
  onChange,
  options = [],
  className = "text-slate-600",
  value,
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className={`ml-1 text-sm font-semibold ${className}`}>
        {label}
      </label>
      <select
        name={name}
        value={value || ""}
        id={id}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
        required
      >
        <option value="">Seleccione una opción</option>
        {options.map((option, index) => (
          <option key={index} value={option.id || option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
