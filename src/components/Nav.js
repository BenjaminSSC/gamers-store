import React from 'react';
import useAuth from '../hooks/useAuth';
import logo from '../assets/images/logogamerstore.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { user, logout } = useAuth();
  const isLoggedIn = !!user; // Deriva isLoggedIn de la existencia de user

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="Logo Gamer Store" className="w-32" />
        </a>
        <div className="flex space-x-4">
          <a href="/products" className="text-white hover:text-gray-300">Productos</a>
          <div className="h-6 border-r border-white"></div>
          {isLoggedIn && <a href="/post" className="text-white hover:text-gray-300">Publicaciones</a>}
          {isLoggedIn && <div className="h-6 border-r border-white"></div>}
          {isLoggedIn && (
            <>
              <Link to="/profile" className="text-white hover:text-gray-300">Perfil</Link>
              <div className="h-6 border-r border-white"></div>
            </>
          )}
          {isLoggedIn ? (
            <button onClick={logout} className="text-white hover:text-gray-300">
              Cerrar Sesión
            </button>
          ) : (
            <button className="text-white hover:text-gray-300">
              <Link to="/login" className="text-white hover:text-gray-300">Iniciar Sesión</Link>
            </button>
          )}
          <div className="h-6 border-r border-white"></div>
          <a href="/cart" className="text-white hover:text-gray-300">Carrito</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;