import React from 'react';

const ProductImage = ({ imageUrl, alt }) => {
  return (
    <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
      <img src={imageUrl} alt={alt} className="w-full rounded" />
    </div>
  );
};

export default ProductImage;