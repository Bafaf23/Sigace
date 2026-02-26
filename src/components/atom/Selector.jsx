"use client";
export default function Selector({ id, name, label, onChange, options = [] }) {
  return (
    <div className="flex flex-col gap-1 w-1/7">
      <label className="text-sm font-semibold text-slate-600 ml-1">
        {label}
      </label>
      <select
        name={name}
        id={id}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 
               focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 
               transition-all placeholder:text-slate-400"
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
