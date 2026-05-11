import CardSecction from "../atom/CardSection";
import Icon from "../atom/Icon";
import { faBook } from "@fortawesome/free-solid-svg-icons";
/**
 * Grilla de secciones cargadas en el sistema.
 *
 * @componet
 *
 * @param {object} props
 * @param {object} props.dataSet - Objeto de la seccion
 * @param {Array} props.availableStudents
 * @returns {JSX.Element}
 */

export default function CardGridSetion({ dataSet = [], availableStudents }) {
  if (!dataSet || dataSet.length === 0)
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-12 text-center dark:border-slate-500 dark:bg-slate-700">
        <Icon
          icon={faBook}
          className="mb-4 text-4xl text-slate-300 dark:text-slate-400"
        />
        <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
          No hay secciones creadas
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Comienza agregando una materia en el formulario lateral.
        </p>
      </div>
    );

  console.log(dataSet);

  return (
    <div className="grid gap-5 p-3 md:grid-cols-1 lg:grid-cols-2">
      {dataSet.map((section) => {
        const teacherName = section.teachers_id?.user
          ? `${section.teachers_id.user.name} ${section.teachers_id.user.lastName}`
          : "Sin docente asignado";
        return (
          <CardSecction
            id={section.id}
            key={section.id}
            grade={section.name}
            identifier={section.code_section}
            teacher={teacherName}
            current={section._count?.students || 0}
            max={section.max_cup}
            availableStudents={availableStudents}
          />
        );
      })}
    </div>
  );
}
