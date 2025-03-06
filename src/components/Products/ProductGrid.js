import React from 'react';
import Article from '../Article';

const ProductGrid = ({ products }) => {
  const getImageUrl = (imageurl) => {
    console.log('imageurl recibido:', imageurl);
    if (imageurl && imageurl.startsWith('/uploads/')) {
      return `https://backproyectogames-production-f162.up.railway.app${imageurl}`;
    }
    return imageurl || '/images/sekiro-ps4.webp';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => {
        const imageUrl = getImageUrl(product.imageurl);
        console.log('URL generada para', product.name, ':', imageUrl);
        return (
          <Article
            key={product.id}
            id={product.id}
            image={imageUrl}
            name={product.name}
            precio={parseFloat(product.price).toFixed(2)}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;