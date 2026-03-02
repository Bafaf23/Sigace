"use client";
import { useContext, useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Inicializamos con un valor neutro (ej. 'light') para evitar errores de servidor
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Este useEffect se ejecuta SOLO en el cliente una vez que carga la página
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  // Este efecto aplica el cambio visual cuando el 'theme' cambia
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Evitamos el "parpadeo" de colores antes de que el cliente sepa qué tema usar
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
