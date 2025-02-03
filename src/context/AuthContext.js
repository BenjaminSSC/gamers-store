import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
    return storedUser || null;
  });

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('registeredUser', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('registeredUser');
    // No usamos useNavigate aquí, lo pasaremos como parámetro cuando se llame a logout
  };

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
    
    setIsLoggedIn(storedLoginState === 'true');
    setUser(storedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};