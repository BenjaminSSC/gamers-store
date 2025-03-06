import React from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const ProductInfo = ({ name, description, price, category, format, developer, platforms }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const isUsed = platforms.some(platform => platform.used);

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Debes iniciar sesión para agregar productos al carrito');
      return;
    }

    const productToAdd = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      quantity: 1,
    };
    addToCart(productToAdd);
    toast.success(`${name} añadido al carrito`);
  };

  return (
    <div className="w-full lg:w-1/2 text-white">
      <div className="flex items-center mb-4">
        <h2 className="text-4xl font-bold">{name}</h2>
        {isUsed ? (
          <span className="ml-4 px-3 py-1 bg-yellow-500 text-base font-bold text-black rounded-full shadow-md">
            Usado
          </span>
        ) : (
          <span className="ml-4 px-3 py-1 bg-green-500 text-base font-bold text-black rounded-full shadow-md">
            Nuevo
          </span>
        )}
      </div>
      <p className="text-lg text-gray-300 mb-4">{description}</p>
      <p className="text-2xl font-bold mb-4">${price}</p>
      <div className="text-base text-gray-400 mb-4">
        <p>Plataformas:</p>
        <ul>
          {platforms.map((platform) => (
            <li key={platform.id}>
              {platform.name} {platform.used ? '(Usado)' : '(Nuevo)'}
            </li>
          ))}
        </ul>
        <p>Categoría: {category}</p>
        <p>Formato: {format}</p>
        <p>Desarrollador: {developer}</p>
      </div>
      <button
        className="bg-aqua hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        AGREGAR
      </button>
    </div>
  );
};

export default ProductInfo;