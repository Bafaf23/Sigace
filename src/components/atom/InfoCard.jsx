import Icon from "./Icon";

export default function InfoCard({
  label,
  value,
  icon,
  colorClass,
  description,
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className={`rounded-lg p-2 ${colorClass} bg-opacity-10`}>
          <Icon
            icon={icon}
            className={`${colorClass.replace("bg-", "text-")}`}
          />
        </div>
        <span className="text-2xl font-bold text-slate-800">{value}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="text-xs text-slate-400 italic">{description}</p>
      </div>
    </div>
  );
}
