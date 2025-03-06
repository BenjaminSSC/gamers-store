import React from 'react';
import useAuth from '../hooks/useAuth';
import { useCart } from '../context/CartContext';
import logo from '../assets/images/logogamerstore.svg';
import { Link } from 'react-router-dom';
import { FaPen, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaBox, FaUser } from 'react-icons/fa';

const Nav = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const isLoggedIn = !!user;

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-black p-4 fixed z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo Gamer Store" className="w-32" />
        </Link>
        <div className="flex space-x-4 items-center">
          <Link to="/products" className="text-white hover:text-gray-300 flex items-center">
            <FaBox className="mr-2" /> Productos
          </Link>
          <div className="h-6 border-r border-white"></div>
          {isLoggedIn && (
            <Link to="/post" className="text-white hover:text-gray-300 flex items-center">
              <FaPen className="mr-2" /> Publicaciones
            </Link>
          )}
          {isLoggedIn && <div className="h-6 border-r border-white"></div>}
          {isLoggedIn && (
            <>
              <Link to="/profile" className="text-white hover:text-gray-300 flex items-center">
                <FaUser className="mr-2" /> Perfil
              </Link>
              <div className="h-6 border-r border-white"></div>
            </>
          )}
          {isLoggedIn ? (
            <button onClick={logout} className="text-white hover:text-gray-300 flex items-center">
              <FaSignOutAlt className="mr-2" /> Cerrar Sesión
            </button>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-300 flex items-center">
              <FaSignInAlt className="mr-2" /> Iniciar Sesión
            </Link>
          )}
          <div className="h-6 border-r border-white"></div>
          <Link to="/cart" className="text-white hover:text-gray-300 flex items-center relative">
            <FaShoppingCart className="mr-2" />
            Carrito
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;