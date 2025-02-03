import React from 'react';
import image from '../../assets/images/sekiro_banner.webp'

const ProductImage = ({ alt }) => {
  return (
    <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
      <img src={image} alt={alt} className="w-full rounded" />
    </div>
  );
};

export default ProductImage;