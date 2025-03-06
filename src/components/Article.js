import React from 'react';
import { Link } from 'react-router-dom'; // Añadimos esta importación

const Article = ({ id, image, name, precio }) => { // Añadimos id como prop
  return (
    <article className="w-[366.28px] my-5 flex flex-col items-end bg-white rounded-lg shadow-lg ">
      <div className="w-full transition-all hover:brightness-90 duration-500">
        <Link to={`/product/${id}`} ><img
          src={image}
          alt={name}
          className="w-full h-auto rounded-t-lg "
          onError={(e) => (e.target.src = '/images/logogamerstore.webp')}
        /></Link>
      </div>
      <hr className="border-aqua border-t-[3px] w-full" />
      <div className="w-full h-[193.6px] flex flex-col items-center bg-gray-200 rounded-br-lg rounded-bl-lg p-5">
        <p className="text-aquaDark font-light pb-2 pl-3 w-full text-left">{name}</p>
        <p className="text-aquaDark font-extrabold pb-4 pl-3 w-full text-left">USD$ {precio}</p>
        <Link to={`/product/${id}`} className="bg-aqua text-white font-bold px-8 py-5 w-[250px] rounded-lg flex justify-center transition-all hover:bg-aquaDark duration-500">
          <p>COMPRAR</p>
        </Link>
      </div>
    </article>
  );
};

export default Article;