import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [email, setEmail] = useState(''); // Cambia "email" a "username" para coincidir con el backend
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success('Inicio de sesión exitoso');
      navigate('/profile'); // Redirige al perfil después del login exitoso
    } catch (error) {
      toast.error(error.error || 'Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Entrar
        </button>
        <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Crear cuenta
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;