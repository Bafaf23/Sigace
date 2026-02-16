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
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
          Membresías
        </h2>
        <h3 className="text-4xl font-black text-cyan-500">
          Planes adaptados a tu institución
        </h3>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Escoge el nivel de automatización que tu plantel educativo necesita
          para optimizar el control de estudios.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {planes.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white p-8 rounded-3xl border-2 transition-transform hover:-translate-y-2 ${plan.color}`}
          >
            {plan.destacado && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-[10px] font-bold py-1 px-4 rounded-full uppercase tracking-widest">
                Recomendado
              </span>
            )}

            <div className="mb-8">
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center text-cyan-600 mb-4">
                <Icon icon={plan.icono} />
              </div>
              <h4 className="text-xl font-bold text-gray-600 mb-2">
                {plan.nombre}
              </h4>
              <p className="text-3xl font-black text-gray-400">{plan.precio}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-400 text-sm"
                >
                  <Icon icon={faCheck} className="text-cyan-500 text-xs" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.destacado
                  ? "bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-cyan-600 hover:bg-cyan-600 text-gray-200"
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
