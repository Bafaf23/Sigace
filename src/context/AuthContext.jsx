"use client";
import { login } from "@/services/login";
import { logout } from "@/services/logout";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const PUBLIC_ROUTES = ["/", "/register"];

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (!PUBLIC_ROUTES.includes(pathname)) {
      router.push("/");
    }
    setLoading(false);
  }, [pathname]);

  /**
   * Funcion para iniciar sesión
   * @param {string} email - Correo del usuario
   * @param {string} password - Contraseña del usuario
   * @returns {Object} - Datos del usuario
   */
  const handleLogin = async (formData) => {
    const data = await login(formData);

    if (data.error) {
      return { error: data.error };
    }

    setUser(data);
    sessionStorage.setItem("user", JSON.stringify(data));
    return data;
  };

  /**
   * Funcion para cerrar sesión
   * @returns {void}
   */
  const handleLogout = async () => {
    const result = await logout();

    if (result.ok) {
      sessionStorage.clear();
      setUser(null);
      router.push("/");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, handleLogout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
