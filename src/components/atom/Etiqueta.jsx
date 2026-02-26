export default function Etiqueta({
  children,
  className = "bg-cyan-500/10 text-cyan-400",
}) {
  return (
    <div>
      <span
        className={`inline-block rounded-full px-3 py-1 ${className} mb-4 text-xs font-bold tracking-widest uppercase`}
      >
        {children}
      </span>
    </div>
  );
}
