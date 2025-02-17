import React from 'react';

const ProductInfo = ({ name, description, price, category, format, developer, platforms }) => {
  return (
    <div className="w-full lg:w-1/2 text-white">
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-lg font-bold mb-4">${price}</p>
      <p className="text-sm text-gray-400 mb-2">Categoría: {category}</p>
      <p className="text-sm text-gray-400 mb-2">Formato: {format}</p>
      <p className="text-sm text-gray-400 mb-2">Desarrollador: {developer}</p>
      <div className="text-sm text-gray-400 mb-4">
        <p>Plataformas:</p>
        <ul>
          {platforms.map((platform) => (
            <li key={platform.id}>
              {platform.name} ({platform.used ? 'Usado' : 'Nuevo'})
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-aqua hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        AGREGAR
      </button>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default ProductInfo;