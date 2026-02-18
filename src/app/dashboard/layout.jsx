import "@/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Sigace | Dashboard",
  description: "Sistema de Control de Estudios para Liceos",
};

export default function DashboarLayout({ children }) {
  return (
    <>
      <main className="flex flex-col">{children}</main>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
