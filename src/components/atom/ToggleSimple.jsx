export default function ToggleSimple({ label, value, onChange, name }) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all hover:bg-slate-50">
      <span className="text-sm font-bold text-slate-700">{label}</span>

      <div className="relative">
        {/* Input oculto para manejar el estado */}
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={onChange}
          className="sr-only"
        />

        {/* Línea de fondo del switch */}
        <div
          className={`h-7 w-14 rounded-full transition-colors duration-300 ${
            value ? "bg-indigo-600" : "bg-slate-300"
          }`}
        ></div>

        {/* Círculo deslizable */}
        <div
          className={`absolute top-1 left-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
            value ? "translate-x-7" : "translate-x-0"
          }`}
        >
          <span className="text-[8px] font-black text-indigo-600">
            {value ? "SÍ" : "NO"}
          </span>
        </div>
      </div>
    </label>
  );
}
