import { Link } from 'react-router-dom';

const HeroCardGame = ({ title, image, id }) => {
  return (
    <Link to={`/product/${id}`} className="relative bottom-0 mx-1.5 transition-all hover:brightness-75 duration-500 z-30 -top-0 md:-top-20">
      <img src={image} alt={title} className="rounded-br-lg rounded-bl-lg" />
      <div className="bg-aqua absolute bottom-0 p-[11px] w-full flex items-center justify-between rounded-br-lg rounded-bl-lg">
        <p className="text-aquaDark text-xs w-3/4">{title}</p>
        <hr className="border-aquaDark w-1/3" />
      </div>
    </Link>
  );
};

export default HeroCardGame;