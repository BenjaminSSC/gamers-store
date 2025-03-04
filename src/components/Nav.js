import React from 'react';
import useAuth from '../hooks/useAuth';
import logo from '../assets/images/logogamerstore.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo Gamer Store" className="w-32" />
        </Link>
        <div className="flex space-x-4">
          <Link to="/products" className="text-white hover:text-gray-300">Productos</Link>
          <div className="h-6 border-r border-white"></div>
          {isLoggedIn && (
            <Link to="/post" className="text-white hover:text-gray-300">Publicaciones</Link> // Cambiado de <a> a <Link>
          )}
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
          <Link to="/cart" className="text-white hover:text-gray-300">Carrito</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;