import React, { createContext, useState, useEffect } from 'react';
import { register, login, setAuthToken, verifyToken } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // Verificar el token al cargar la aplicación
  useEffect(() => {
    const verifyStoredToken = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          setAuthToken(storedToken);
          const userData = await verifyToken(); // Ahora está importado correctamente
          setToken(storedToken);
          setUser(userData); // Establece los datos del usuario desde el backend
        } catch (error) {
          console.error('Error verifying token:', error);
          setToken(null);
          setUser(null);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    verifyStoredToken();
  }, []);

  // Configurar el token en axios cuando cambia
  useEffect(() => {
    if (token) {
      setAuthToken(token);
      localStorage.setItem('token', token);
    } else {
      setAuthToken(null);
      localStorage.removeItem('token');
    }
  }, [token]);

  // Función para registrar un usuario
  const registerUser = async (username, password) => {
    try {
      const data = await register(username, password);
      setToken(data.token);
      setUser({ username });
      return data;
    } catch (error) {
      throw error;
    }
  };

  // Función para iniciar sesión
  const loginUser = async (username, password) => {
    try {
      const data = await login(username, password);
      setToken(data.token);
      setUser({ username });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token'); // Aseguramos que el token se elimine al cerrar sesión
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        registerUser,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};