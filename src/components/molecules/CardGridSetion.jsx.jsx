import CardSecction from "../atom/CardSection";

export default function CardGridSetion({ dataSet }) {
  if (!dataSet)
    return (
      <div className="flex items-center justify-center p-3">
        <div className="w-full rounded-2xl border border-slate-200 bg-slate-200 p-5 text-center text-slate-400">
          {"No hay secciones que mostras"}
        </div>
      </div>
    );
  return (
    <div className="grid gap-5 p-3 md:grid-cols-1 lg:grid-cols-2">
      {data.map((section) => (
        <CardSecction
          key={section.id} // Mejor usar el ID único que el index
          grade={section.grade}
          identifier={section.identifier}
          teacher={section.guia}
          current={section.current}
          max={section.max}
        />
      ))}
    </div>
  );
}
