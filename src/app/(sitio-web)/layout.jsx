import Header from "@/components/organism/Header";
import Fotter from "@/components/organism/Fotter";

export const metadata = {
  title: "Sigace | Gestión Escolar",
  description: "Sistema de Control de Estudios para Liceos",
};

export default function PublicLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col">{children}</main>
      <Fotter></Fotter>
    </>
  );
}
