import "@/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Toaster } from "react-hot-toast";

config.autoAddCss = false;

export const metadata = {
  title: "Sigace | Gestión Escolar",
  description: "Sistema de Control de Estudios para Liceos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-100">
        <div className="flex min-h-screen flex-col">
          <main className="flex flex-col">{children}</main>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            className:
              "rounded-xl border border-slate-100 shadow-lg font-medium",
            duration: 4000,
          }}
        />
      </body>
    </html>
  );
}
