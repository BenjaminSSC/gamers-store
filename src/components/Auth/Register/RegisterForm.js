import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden.');
      return;
    }
    // Simulación de éxito del registro
    const userData = { name: email.split('@')[0], email, lastPost: 'Sin posts aún' };
    login(userData); // Usa la función login del contexto para actualizar el estado
    toast.success('Registro exitoso');
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña (mínimo 6 dígitos)" value={password} onChange={handlePasswordChange} required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="confirmPassword">
          Confirmar Contraseña
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Entrar
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;