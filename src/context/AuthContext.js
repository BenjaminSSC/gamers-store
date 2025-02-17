import React, { createContext, useState, useEffect } from 'react';
import { register, login, setAuthToken } from '../api'; // Importa las funciones de api.js

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // Configurar el token en axios cuando cambia
  useEffect(() => {
    if (token) {
      setAuthToken(token);
      localStorage.setItem('token', token);
    } else {
      setAuthToken(null);
      localStorage.removeItem('token');
    }
    setLoading(false);
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
  }

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