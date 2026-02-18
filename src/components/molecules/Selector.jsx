import Input from "../atom/Input";

export default function Selector({
  label,
  options = [],
  name,
  nameInput,
  id,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-600 ml-1">
        {label}
      </label>
      <div className="flex gap-2">
        <select
          name={name}
          id={id}
          onChange={onChange}
          className="w-1/3 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 
                   focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 
                   transition-all placeholder:text-slate-400"
          required
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Input placeholder={placeholder} name={nameInput} />
      </div>
    </div>
  );
}
