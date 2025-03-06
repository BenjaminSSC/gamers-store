import React from 'react';
import image from '../assets/images/mortalkombat_banner.webp'
import { Link } from 'react-router-dom';

const FeaturedProductBanner = ({ title, price, description }) => {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px] bg-black text-white overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full relative z-10">
        <div className="w-full lg:w-1/2"></div>
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-2xl lg:text-3xl text-aqua mb-4">{price}</p>
          <p className="text-sm lg:text-base">{description}</p>
          <Link to="/product/4">
          <button className="mt-4 bg-aqua hover:bg-aquaDark text-white font-bold py-2 px-4 rounded">
            Comprar Ahora
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductBanner;