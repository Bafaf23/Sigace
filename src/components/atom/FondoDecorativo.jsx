export default function FondoDecurativo() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Círculos de luz */}

      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

      {/* Línea curva fina */}
      <svg
        className="absolute top-0 h-full w-full opacity-[0.05]"
        xmlns="http://www.w3.org"
      >
        <path
          d="M-100 100 Q 150 300 500 100 T 1200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-indigo-400"
        />
      </svg>

      {/* Patrón de asteriscos dispersos */}
      <div className="absolute top-1/4 left-[10%] rotate-45 text-4xl font-black text-indigo-200/30">
        *
      </div>
      <div className="absolute right-[15%] bottom-1/4 -rotate-12 text-5xl font-black text-orange-200/30">
        ✱
      </div>
      <div className="absolute top-3/4 left-1/2 text-2xl font-black text-slate-200/40">
        ×
      </div>
      <div className="absolute right-[14%] bottom-2/6 -rotate-9 text-5xl font-black text-orange-200/30">
        ✱
      </div>
      <div className="absolute right-[11%] bottom-2/4 -rotate-12 text-5xl font-black text-orange-200/30">
        ✱
      </div>
      <div className="absolute right-[20%] bottom-2/5 -rotate-13 text-5xl font-black text-orange-200/30">
        ✱
      </div>
    </div>
  );
}
