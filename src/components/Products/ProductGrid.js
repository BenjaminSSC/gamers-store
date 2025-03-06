// import React from 'react';
// import Article from '../Article';

// const ProductGrid = ({ products }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {products.map((product) => (
//         <Article
//           key={product.id} // Movemos el key aquí
//           id={product.id} // Pasamos el id como prop
//           image={product.imageurl || '/images/sekiro-ps4.webp'}
//           name={product.name}
//           precio={parseFloat(product.price).toFixed(2)}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;
import React from 'react';
import Article from '../Article';

const ProductGrid = ({ products }) => {
  const getImageUrl = (imageurl) => {
    console.log('imageurl recibido:', imageurl); // Depuración
    if (imageurl && imageurl.startsWith('/uploads/')) {
      return `https://gamers-site.netlify.app${imageurl}`;
    }
    return imageurl || '/images/sekiro-ps4.webp';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => {
        const imageUrl = getImageUrl(product.imageurl);
        console.log('URL generada para', product.name, ':', imageUrl); // Depuración
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