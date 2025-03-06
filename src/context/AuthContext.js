import React, { createContext, useState, useEffect, useContext } from 'react';
import { register, login, setAuthToken, verifyToken } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyStoredToken = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          setAuthToken(storedToken);
          const userData = await verifyToken();
          setToken(storedToken);
          setUser(userData);
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

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      localStorage.setItem('token', token);
    } else {
      setAuthToken(null);
      localStorage.removeItem('token');
    }
  }, [token]);

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
    localStorage.removeItem('token');
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

export const useAuth = () => useContext(AuthContext);