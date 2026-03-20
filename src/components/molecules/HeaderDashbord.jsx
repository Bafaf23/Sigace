import Selector from "../atom/Selector";

export default function HeaderDashbord({ user, titelPage }) {
  const hora = new Date().toLocaleString();

  return (
    <section className="flex w-full flex-col md:flex-row md:justify-between">
      <div className="rounded-b-2xl bg-indigo-500 p-3 text-slate-100 shadow-indigo-400 md:bg-transparent lg:bg-transparent">
        <div className="mb-2 flex items-center gap-2">
          {user ? (
            <>
              <h1 className="text-2xl font-bold md:text-3xl md:text-indigo-300">
                Hola,
              </h1>
              <span className="text-2xl font-bold text-slate-50 normal-case md:text-3xl md:text-indigo-500">
                {user.name} {user.lastName}
              </span>
            </>
          ) : (
            <h1 className="text-3xl font-bold text-slate-100 uppercase md:text-slate-500 lg:text-slate-500 dark:md:text-slate-400">
              {titelPage}
            </h1>
          )}
        </div>
        <p className="text-slate-500">Bienvenido a tu panel de control.</p>
        <div className="flex items-center justify-between rounded-xl bg-indigo-600 p-1 md:bg-transparent">
          {/* ultima conexcion */}
          <div>
            <p className="text-xs italic md:text-gray-400/40">
              Tu ultima coneccion
            </p>
            <span className="text-xs italic md:text-gray-400/40">{hora}</span>
          </div>
          {/* selector de materias */}
          {user?.materias && (
            <div className="md:hidden">
              <Selector
                id={"materias"}
                name={"Materia"}
                options={user.materias || []}
                label={"Materias"}
                className={"text-slate-100"}
              />
            </div>
          )}
        </div>
      </div>

      {user?.materias && (
        <div className="hidden p-3 md:flex">
          <Selector
            id={"materias"}
            name={"Materia"}
            options={user.materias || []}
            label={"Materias"}
          />
        </div>
      )}
    </section>
  );
}
