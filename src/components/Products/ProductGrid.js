import React from 'react';
import Article from '../Article';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Article
          key={product.id} // Movemos el key aquí
          id={product.id} // Pasamos el id como prop
          image={product.imageurl || '/images/sekiro-ps4.webp'}
          name={product.name}
          precio={parseFloat(product.price).toFixed(2)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;