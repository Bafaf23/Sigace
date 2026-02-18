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
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-semibold text-slate-600 ml-1">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 
                   focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 
                   transition-all placeholder:text-slate-400 relative"
      />
    </div>
  );
}
