import Icon from "./Icon";
export default function CardEstado({ titel, info, icon, className }) {
  return (
    <div>
      <div
        className={`${className} bg-white p-6 rounded-2xl border border-gray-200 backdrop-blur-sm hover:border-cyan-500/50 transition-colors`}
      >
        <div className="bg-cyan-500/40 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-cyan-500">
          <Icon icon={icon} className={"text-xl"} />
        </div>
        <h3 className="text-cyan-500 font-bold text-2xl">{info}</h3>
        <p className="text-gray-400 text-sm">{titel}</p>
      </div>
    </div>
  );
}
