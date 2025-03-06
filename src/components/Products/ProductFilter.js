import React from 'react';

const ProductFilter = ({ onFilter }) => {
  return (
    <div className="flex justify-center mb-4">
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        onChange={onFilter}
        className="p-2 border text-black rounded w-full md:w-1/2 lg:w-1/3"
      />
    </div>
  );
};

export default ProductFilter;