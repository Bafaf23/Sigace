export default function SigaceLogo({ className = "text-slate-100" }) {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="bg-cyan-600 h-10 w-10 flex items-center justify-center rounded-xl shadow-lg shadow-cyan-500/20 group-hover:bg-cyan-500 transition-colors">
        <span className="text-white font-black text-2xl tracking-tighter">
          S
        </span>
      </div>
      <div className="flex flex-col">
        <h1
          className={`${className} font-bold leading-none text-xl tracking-tight`}
        >
          SIGA<span className={`text-cyan-500`}>CE</span>
        </h1>
        <p className="text-[10px] text-slate-400 font-medium tracking-[0.2em] uppercase">
          Control de Estudios
        </p>
      </div>
    </div>
  );
}
