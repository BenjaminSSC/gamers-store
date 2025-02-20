import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ id, image, name, precio }) => {
  return (
    <article className="w-[366.28px] h-[630px] flex flex-col items-end bg-white rounded-lg shadow-lg">
      <Link to={`/product/${id}`} className="w-full h-[433px]">
        <img
          src={image}
          alt={name}
          className="w-full h-auto rounded-t-lg"
          onError={(e) => (e.target.src = '/images/logogamerstore.webp')}
        />
      </Link>
      <hr className="border-aqua border-t-[3px] w-full" />
      <div className="w-full h-[193.6px] flex flex-col items-center bg-gray-200 rounded-br-lg rounded-bl-lg p-5">
        <p className="text-aquaDark font-light pb-2 pl-3 w-full text-left">{name}</p>
        <p className="text-aquaDark font-extrabold pb-4 pl-3 w-full text-left">USD$ {precio}</p>
        <button className="bg-aqua text-white font-bold px-8 py-5 w-[250px] rounded-lg">
          <p>COMPRAR</p>
        </button>
      </div>
    </article>
  );
};

export default Article;