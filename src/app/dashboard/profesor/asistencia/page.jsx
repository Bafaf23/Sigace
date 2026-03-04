import FondoDecorativo from "@/components/atom/FondoDecorativo";

export default function AsistenciaPage() {
  return (
    <>
      <div className="relative flex h-full min-h-[60vh] items-center justify-center">
        <FondoDecorativo />
        <div className="z-100 rounded-2xl bg-white p-8 text-center shadow">
          <div className="mb-4 flex justify-center text-4xl text-orange-400">
            🚧
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-500 uppercase">
            En construcción
          </h1>
          <p className="mt-2 text-slate-400">
            Pronto podras llevar el control de asistenca de los estudiantes
            asignados a esta materia.
          </p>
        </div>
      </div>
    </>
  );
}
