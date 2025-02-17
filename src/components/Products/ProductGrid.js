import React from 'react';
import Article from '../Article';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <Article
            image={product.imageUrl || './assets/images/sekiro-ps4.webp'}
            name={product.name}
            precio={parseFloat(product.price).toFixed(2)}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;