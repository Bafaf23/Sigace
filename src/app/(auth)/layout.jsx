export const metadata = {
  title: {
    template: "Sigace | %s",
    default: "Sigace - Gestión Académica",
  },
  description: "Sistema de Control de Estudios para Liceos",
};

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2">
      {children}
    </div>
  );
}
