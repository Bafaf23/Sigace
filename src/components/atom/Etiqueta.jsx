export default function Etiqueta({
  children,
  className = "bg-cyan-500/10 text-cyan-400",
}) {
  return (
    <div>
      <span
        className={`inline-block py-1 px-3 rounded-full ${className} text-xs font-bold tracking-widest uppercase mb-4`}
      >
        {children}
      </span>
    </div>
  );
}
