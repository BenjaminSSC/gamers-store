import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  // Envolvemos la función logout original para pasarle navigate
  const logoutWithRedirect = () => {
    context.logout();
    navigate('/'); // O '/home' si prefieres esa ruta
  };

  return {
    ...context,
    logout: logoutWithRedirect
  };
};

export default useAuth;