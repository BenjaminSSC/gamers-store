import React from 'react';

const ProductImage = ({ imageUrl, alt }) => {
  const getImageUrl = (url) => {
    if (url && url.startsWith('/uploads/')) {
      return `https://backproyectogames-production-f162.up.railway.app${url}`;
    }
    return url || '/images/sekiro-ps4.webp';
  };

  const finalImageUrl = getImageUrl(imageUrl);

  return (
    <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
      <img src={finalImageUrl} alt={alt} className="w-full rounded" />
    </div>
  );
};

export default ProductImage;