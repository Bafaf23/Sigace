import Icon from "../atom/Icon";
import Selector from "../atom/Selector";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

/**
 * Titulos de las paginas que suporta el saludo al usuario o el titulo de la pagian.
 *
 * @componet
 * @param {object} props
 * @param {object} props.user - Objeto con los datos del Usuario
 * @param {string} props.titelPage - Titulo de la pagina
 * @returns {JSX.Element}
 */

export default function HeaderDashbord({ user, titelPage }) {
  const router = useRouter();

  const formatLastLogin = (date) => {
    if (!date) return "Primera conexión";

    return new Intl.DateTimeFormat("es-VE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Caracas", // Forzamos la hora de Venezuela
    }).format(new Date(date));
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/logout/");
      if (response.ok) {
        localStorage.removeItem("user");
        router.push("/");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <section className="flex w-full flex-col md:flex-row md:justify-between">
      <div className="rounded-b-2xl bg-indigo-500 p-3 text-slate-100 shadow-indigo-400 md:bg-transparent lg:bg-transparent dark:bg-indigo-600 dark:shadow-indigo-400">
        <div className="mb-2 flex items-center justify-between gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-50 md:text-3xl md:text-indigo-300 dark:text-slate-500">
                Hola,
              </h1>
              <span className="text-2xl font-bold text-slate-50 normal-case md:text-3xl md:text-indigo-500 dark:text-slate-500">
                {user.name} {user.lastName}
              </span>
            </div>
          ) : (
            <h1 className="text-3xl font-bold text-slate-50 uppercase md:text-slate-500 lg:text-slate-500 dark:md:text-slate-400">
              {titelPage}
            </h1>
          )}

          <div>
            {/* boton de cerrar sesión */}
            <button
              className="group flex items-center gap-2 rounded-md p-2 text-slate-50 transition-all duration-300 hover:bg-slate-700/20 hover:text-slate-700 dark:text-slate-500 dark:hover:bg-slate-300/20 dark:hover:text-slate-300"
              onClick={handleLogout}
            >
              <Icon
                icon={faRightFromBracket}
                className="cursor-pointer text-slate-50 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300"
              />
            </button>
          </div>
        </div>
        <p className="text-slate-300 dark:text-slate-500">
          Bienvenido a tu panel de control.
        </p>
        <div className="flex items-center justify-between rounded-xl bg-indigo-600 p-1 md:bg-transparent">
          {/* ultima conexcion */}
          <div>
            <p className="text-xs italic md:text-gray-400/40">
              Tu ultima coneccion
            </p>
            <span className="text-xs italic md:text-gray-400/40">
              {formatLastLogin(user?.lastLogin)}
            </span>
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
