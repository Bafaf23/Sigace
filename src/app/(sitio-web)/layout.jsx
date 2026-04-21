export const metadata = {
  title: "Sigace | Gestión Escolar",
  description: "Sistema de Control de Estudios para Liceos",
};

export default function PublicLayout({ children }) {
  return <div className="flex flex-col">{children}</div>;
}
