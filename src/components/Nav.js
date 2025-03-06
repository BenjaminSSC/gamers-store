import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useCart } from '../context/CartContext';
import logo from '../assets/images/logogamerstore.svg';
import { Link } from 'react-router-dom';
import { FaPen, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaBox, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const isLoggedIn = !!user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black p-4 fixed z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo Gamer Store" className="w-32" />
        </Link>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div 
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <Link 
            to="/products" 
            className="text-white hover:text-gray-300 flex items-center" 
            onClick={() => setIsMenuOpen(false)}
          >
            <FaBox className="mr-2" /> Productos
          </Link>
          <div className="h-6 border-r border-white md:block hidden"></div>
          {isLoggedIn && (
            <Link 
              to="/post" 
              className="text-white hover:text-gray-300 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <FaPen className="mr-2" /> Publicaciones
            </Link>
          )}
          {isLoggedIn && <div className="h-6 border-r border-white md:block hidden"></div>}
          {isLoggedIn && (
            <>
              <Link 
                to="/profile" 
                className="text-white hover:text-gray-300 flex items-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser className="mr-2" /> Perfil
              </Link>
              <div className="h-6 border-r border-white md:block hidden"></div>
            </>
          )}
          {isLoggedIn ? (
            <button 
              onClick={() => { logout(); setIsMenuOpen(false); }} 
              className="text-white hover:text-gray-300 flex items-center"
            >
              <FaSignOutAlt className="mr-2" /> Cerrar Sesión
            </button>
          ) : (
            <Link 
              to="/login" 
              className="text-white hover:text-gray-300 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              <FaSignInAlt className="mr-2" /> Iniciar Sesión
            </Link>
          )}
          <div className="h-6 border-r border-white md:block hidden"></div>
          <Link 
            to="/cart" 
            className="text-white hover:text-gray-300 flex items-center relative" 
            onClick={() => setIsMenuOpen(false)}
          >
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