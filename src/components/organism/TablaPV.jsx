export default function TablaPV({ evaluaciones }) {
  return (
    <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold text-slate-600 uppercase dark:border-slate-700 dark:bg-cyan-800 dark:text-slate-100">
            <tr>
              <th className="border-b px-4 py-3">Semana</th>
              <th className="border-b px-4 py-3">Referente Teórico-Práctico</th>
              <th className="border-b px-4 py-3">Estrategia / Técnica</th>
              <th className="border-b px-4 py-3">Instrumento</th>
              <th className="border-b px-4 py-3 text-center">Tipo/Forma</th>
              <th className="border-b px-4 py-3 text-center">%</th>
              <th className="border-b px-4 py-3 text-center">Ptos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 dark:divide-slate-700 dark:text-slate-300">
            {evaluaciones?.length > 0 ? (
              evaluaciones.map((eva, index) => (
                <tr
                  key={index}
                  className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <td className="px-4 py-4 text-center font-medium">
                    {eva.semana}
                  </td>
                  <td className="wrap-break-words max-w-xs px-4 py-4">
                    {eva.contenido}
                  </td>
                  <td className="px-4 py-4">
                    <span className="block font-semibold">{eva.actividad}</span>
                    <span className="text-xs text-slate-400 italic">
                      {eva.tecnica}
                    </span>
                  </td>
                  <td className="px-4 py-4">{eva.instrumento}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="rounded bg-indigo-100 px-2 py-1 text-[10px] font-bold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                      {eva.tipoForma}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center font-bold text-indigo-600 dark:text-indigo-500">
                    {eva.porcentaje}%
                  </td>
                  <td className="px-4 py-4 text-center font-semibold">
                    {(eva.porcentaje * 20) / 100}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-4 py-10 text-center text-slate-400 italic"
                >
                  No hay evaluaciones registradas para esta materia.
                </td>
              </tr>
            )}
          </tbody>
          <tfoot className="bg-slate-50 font-bold dark:bg-cyan-700">
            <tr>
              <td
                colSpan="5"
                className="px-4 py-3 text-right dark:text-slate-800"
              >
                Total Acumulado:
              </td>
              <td className="px-4 py-3 text-center text-indigo-600 dark:text-slate-100">
                100%
              </td>
              <td className="px-4 py-3 text-center dark:text-slate-100">
                20 pts
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
