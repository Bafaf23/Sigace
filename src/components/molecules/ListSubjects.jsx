import Icon from "../atom/Icon";
import SubjectActions from "./SubjectActions";
import { getSubject } from "@/actions/getSubject";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default async function ListSubjects() {
  const subjects = await getSubject();

  if (!subjects || subjects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-12 text-center dark:border-slate-500 dark:bg-slate-700">
        <Icon
          icon={faBook}
          className="mb-4 text-4xl text-slate-300 dark:text-slate-400"
        />
        <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
          No hay materias registradas
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Comienza agregando una materia en el formulario lateral.
        </p>
      </div>
    );
  }

  return (
    <>
      <h2 className="p-3 text-2xl font-bold text-gray-500 uppercase dark:text-slate-400">
        Lista de materias
      </h2>
      <div className="p-3">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="rounded-2xl border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-300">
                  Código
                </th>
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-300">
                  Materia
                </th>
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-300">
                  Año
                </th>
                <th className="px-6 py-4 text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-300">
                  Área
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-300">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-600">
              {subjects.map((subject) => (
                <tr
                  key={subject.id}
                  className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-700/60"
                >
                  <td className="px-6 py-4 text-sm font-medium text-cyan-700">
                    {subject.code || "S/C"}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                    {subject.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                    {subject.grade}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-300">
                    {subject.area || "General"}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {/* Inyectamos el componente de cliente aquí */}
                    <SubjectActions subject={subject} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
