"use client";
import { login } from "@/services/login";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/");
    }
    setLoading(false);
  }, []);

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
    sessionStorage.clear();
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
