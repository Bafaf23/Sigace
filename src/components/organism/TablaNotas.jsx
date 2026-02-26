export default function TablaNotas() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-6 py-4 text-sm font-semibold text-slate-600">
              Alumno
            </th>
            <th className="px-4 py-4 text-center text-sm font-semibold text-slate-600">
              Actividad 1 (25%)
            </th>
            <th className="px-4 py-4 text-center text-sm font-semibold text-slate-600">
              Actividad 2 (25%)
            </th>
            <th className="px-4 py-4 text-center text-sm font-semibold text-slate-600">
              Examen (50%)
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
              Definitiva
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            { nombre: "Ana García", id: "30021867", n1: 18, n2: 15, n3: 16 },
            { nombre: "Luis Pérez", id: "2323332", n1: 12, n2: 10, n3: 11 },
            { nombre: "Maria Sanoja", id: "2324343", n1: 20, n2: 19, n3: 20 },
            { nombre: "Samata castro", id: "32434334", n1: 10, n2: 9, n3: 2 },
          ].map((alumno, index) => {
            const definitiva = (
              alumno.n1 * 0.25 +
              alumno.n2 * 0.25 +
              alumno.n3 * 0.5
            ).toFixed(1);

            return (
              <tr
                key={index}
                className="transition-colors hover:bg-slate-50/50"
              >
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-800">
                      {alumno.nombre}
                    </span>
                    <span className="text-xs text-slate-400">
                      C.I{alumno.id}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center text-slate-700">
                  {alumno.n1}
                </td>
                <td className="px-4 py-4 text-center text-slate-700">
                  {alumno.n2}
                </td>
                <td className="px-4 py-4 text-center text-slate-700">
                  {alumno.n3}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-bold ${
                      definitiva >= 10
                        ? "bg-cyan-100 text-cyan-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {definitiva}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
