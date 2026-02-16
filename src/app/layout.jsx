import "@/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Sigace | Gestión Escolar",
  description: "Sistema de Control de Estudios para Liceos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-100">
        <div className="flex flex-col min-h-screen">
          <main className="flex flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
