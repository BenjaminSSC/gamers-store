import React from 'react';

const ProductInfo = ({ name, description, price, category, format, developer }) => {
  return (
    <div className="w-full lg:w-1/2 text-white">
      <h2 className="text-xl lg:text-2xl font-bold mb-2">{name}</h2>
      <p className="mb-2"><strong>Categoría:</strong> {category}</p>
      <p className="mb-2"><strong>Formato Producto:</strong> {format}</p>
      <p className="mb-2"><strong>Desarrollador:</strong> {developer}</p>
      <p className="mb-4"><strong>Precio:</strong> {price}</p>
      <button className="bg-aqua hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        AGREGAR
      </button>
      <p className="mt-4">{description}</p>
    </div>
  );
};

export default ProductInfo;