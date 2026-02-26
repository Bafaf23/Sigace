import Icon from "../atom/Icon";
import {
  faCheck,
  faSchool,
  faBuildingColumns,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

export default function PlanesSigace() {
  const planes = [
    {
      nombre: "Básico (Docente)",
      precio: "Gratis",
      icono: faSchool,
      features: [
        "Carga de notas",
        "Asistencia digital",
        "Reporte de lapso",
        "Acceso para 1 sección",
      ],
      color: "border-gray-300 shadow",
      boton: "Comenzar ahora",
    },
    {
      nombre: "Institucional",
      precio: "Popular",
      icono: faBuildingColumns,
      features: [
        "Inscripción en línea",
        "Gestión de representantes",
        "Boletas automatizadas",
        "Soporte multi-usuario",
      ],
      color: "border-cyan-500 shadow-lg shadow-cyan-500/10",
      destacado: true,
      boton: "Contactar Ventas",
    },
    {
      nombre: "Gubernamental",
      precio: "Custom",
      icono: faMicrochip,
      features: [
        "Estadísticas regionales",
        "Integración con el MPPE",
        "API de datos",
        "Servidor dedicado",
      ],
      color: "border-gray-300 shadow",
      boton: "Solicitar Demo",
    },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto mb-16 max-w-7xl text-center">
        <h2 className="mb-4 text-sm font-bold tracking-widest text-orange-500 uppercase">
          Membresías
        </h2>
        <h3 className="text-4xl font-black text-cyan-500">
          Planes adaptados a tu institución
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Escoge el nivel de automatización que tu plantel educativo necesita
          para optimizar el control de estudios.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {planes.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl border-2 bg-white p-8 transition-transform hover:-translate-y-2 ${plan.color}`}
          >
            {plan.destacado && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                Recomendado
              </span>
            )}

            <div className="mb-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200 text-cyan-600">
                <Icon icon={plan.icono} />
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-600">
                {plan.nombre}
              </h4>
              <p className="text-3xl font-black text-gray-400">{plan.precio}</p>
            </div>

            <ul className="mb-8 space-y-4">
              {plan.features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-400"
                >
                  <Icon icon={faCheck} className="text-xs text-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-xl py-3 font-bold transition-all ${
                plan.destacado
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/20 hover:bg-cyan-500"
                  : "bg-cyan-600 text-gray-200 hover:bg-cyan-600"
              }`}
            >
              {plan.boton}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
