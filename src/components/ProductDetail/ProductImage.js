// import React from 'react';

// const ProductImage = ({ imageUrl, alt }) => {
//   return (
//     <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
//       <img src={imageUrl} alt={alt} className="w-full rounded" />
//     </div>
//   );
// };

// export default ProductImage;
import React from 'react';

const ProductImage = ({ imageUrl, alt }) => {
  const getImageUrl = (url) => {
    // Si la URL empieza con '/uploads/', es del backend
    if (url && url.startsWith('/uploads/')) {
      return `http://localhost:5000${url}`;
    }
    // Si no, asumimos que es del frontend (o usamos el fallback si es necesario)
    return url || '/images/sekiro-ps4.webp'; // Fallback opcional
  };

  const finalImageUrl = getImageUrl(imageUrl);

  return (
    <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
      <img src={finalImageUrl} alt={alt} className="w-full rounded" />
    </div>
  );
};

export default ProductImage;