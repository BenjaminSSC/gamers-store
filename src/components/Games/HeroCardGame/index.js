

const HeroCardGame = ({title, image}) => {
  return (
    <div className="relative bottom-0 mx-1.5">
      <img src={image} alt="" className="rounded-br-lg rounded-bl-lg" />
      <div className="bg-aqua absolute bottom-0 p-[11px] w-full flex items-center justify-between rounded-br-lg rounded-bl-lg">
        <p className="text-aquaDark text-xs w-3/4">{title}</p>
        <hr className="border-aquaDark w-1/3" />
      </div>
    </div>
);}

export default HeroCardGame