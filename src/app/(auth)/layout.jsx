import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Sigace | Iniciar Sesion",
  description: "Sistema de Control de Estudios para Liceos",
};

export default function AuthLayout({ children }) {
  return (
    <div className="bg-linear-to-br from-slate-50 to-indigo-50">
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
