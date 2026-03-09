import { Toaster } from "react-hot-toast";

const titel = "titulo";
export const metadata = {
  title: `Sigace | ${titel}`,
  description: "Sistema de Control de Estudios para Liceos",
};

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-slate-50 to-indigo-50 p-2">
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
