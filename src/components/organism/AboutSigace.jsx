import Icon from "../atom/Icon";
import {
  faShieldHalved,
  faUsers,
  faBolt,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutSigace() {
  const valores = [
    {
      icono: faShieldHalved,
      titulo: "Seguridad Integral",
      desc: "Protegemos la data académica de cada estudiante con respaldos seguros y acceso controlado por roles.",
    },
    {
      icono: faUsers,
      titulo: "Comunidad Educativa",
      desc: "Unimos a directivos, docentes y representantes en una sola plataforma de comunicación eficiente.",
    },
    {
      icono: faBolt,
      titulo: "Agilidad Administrativa",
      desc: "Digitalizamos procesos manuales para reducir el tiempo de inscripción y carga de calificaciones.",
    },
  ];

  return (
    <section id="nosotros" className="py-24 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Lado Izquierdo: Imagen o Composición Visual */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-orange-500/20 shadow-2xl">
              <div className="bg-white/20 p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-24 bg-orange-500/10 rounded-xl border border-orange-500/30 flex items-center justify-center">
                    <Icon
                      icon={faGraduationCap}
                      className="text-orange-500 text-4xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Elemento Decorativo */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-600/20 rounded-full blur-2xl"></div>
          </div>

          {/* Lado Derecho: Contenido */}
          <div className="flex-1">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">
              Sobre el Proyecto
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-cyan-500 mb-6">
              Transformando la Gestión Escolar a una nueva experiencia digital
            </h3>
            <p className="text-gray-400 text-lg mb-10">
              SIGACE nace como una solución moderna para superar las barreras
              del registro manual. Nuestra misión es empoderar a la institución
              con herramientas digitales que garanticen la transparencia y la
              rapidez en el manejo de expedientes académicos.
            </p>

            {/* Listado de Valores (Moléculas) */}
            <div className="space-y-6">
              {valores.map((val, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="mt-1 bg-white w-12 h-12 shrink-0 rounded-lg flex items-center justify-center text-cyan-500 border border-gray-300 group-hover:border-cyan-500/50 transition-colors">
                    <Icon icon={val.icono} />
                  </div>
                  <div>
                    <h4 className="text-cyan-500 font-bold text-lg mb-1">
                      {val.titulo}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
