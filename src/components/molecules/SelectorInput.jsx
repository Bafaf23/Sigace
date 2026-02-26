import Input from "../atom/Input";

export default function SelectorInput({
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
      <label className="ml-1 text-sm font-semibold text-slate-600">
        {label}
      </label>
      <div className="flex gap-2">
        <select
          name={name}
          id={id}
          onChange={onChange}
          className="w-1/3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
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
