import { createContext, useState, useContext } from 'react';

// Simulación simple: el usuario está logueado y tiene rol de 'admin' o 'user'
const AuthContext = createContext({
  user: { name: "Admin", role: "admin" }, // Cambia a 'user' para probar el acceso restringido
  isAuthenticated: true
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth] = useState({ user: { name: "Admin", role: "admin" }, isAuthenticated: true });
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);