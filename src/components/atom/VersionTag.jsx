import packageInfo from "../../../package.json";

export default function VersionTag() {
  const version = packageInfo.version; // Esto luego lo puedes traer de un config o package.json

  return (
    <div className="flex items-center justify-end p-1 opacity-50 select-none">
      {/* Etiqueta tipo "post-it" o nota de plano */}
      <div className="flex justify-end rounded-sm border border-slate-500 p-1 text-xs">
        <span className="font-mono font-bold text-slate-600 uppercase">
          Build: v{version}
        </span>
      </div>
    </div>
  );
}
