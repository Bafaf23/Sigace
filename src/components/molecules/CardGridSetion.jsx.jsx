import CardSecction from "../atom/CardSection";

export default function CardGridSetion({ dataSet, availableStudents }) {
  if (!dataSet || dataSet == 0)
    return (
      <div className="flex items-center justify-center p-3">
        <div className="w-full rounded-2xl border border-slate-200 bg-slate-200 p-5 text-center text-slate-400">
          <h3 className="text-lg font-semibold text-slate-500">
            No hay secciones que mostrar
          </h3>
          <p className="text-sm text-slate-400">
            Parece que aún no se han creado secciones en este año escolar.
          </p>
        </div>
      </div>
    );

  return (
    <div className="grid gap-5 p-3 md:grid-cols-1 lg:grid-cols-2">
      {dataSet.map((section) => {
        const teacherName = section.teacher?.user
          ? `${section.teacher.user.name} ${section.teacher.user.lastName}`
          : "Sin docente asignado";
        return (
          <CardSecction
            id={section.id}
            key={section.id}
            grade={section.grade}
            identifier={section.identifier}
            teacher={teacherName}
            current={section._count?.students || 0}
            max={section.capacity}
            availableStudents={availableStudents}
          />
        );
      })}
    </div>
  );
}
