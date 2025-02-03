import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña" />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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