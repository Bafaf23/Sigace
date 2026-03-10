export const metadata = {
  title: "Sigace | Gestión Escolar",
  description: "Sistema de Control de Estudios para Liceos",
};

export default function PublicLayout({ children }) {
  return (
    <>
      <main className="flex flex-col">{children}</main>
    </>
  );
}
