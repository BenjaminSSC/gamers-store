import React from 'react';
import Article from '../Article';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <Article 
          key={product.id} 
          image={product.image} 
          name={product.name} 
          precio={product.price}
        />
      ))}
    </div>
  );
};

export default ProductGrid;