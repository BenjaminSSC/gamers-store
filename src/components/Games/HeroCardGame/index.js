import ImageGameExample from "../../../assets/images/zelda_banner.webp"

const HeroCardGame = () => {
  return (
    <div className="relative">
      <img
        src={ImageGameExample}
        alt=""
        className="rounded-br-lg rounded-bl-lg"
      />
      <div className="bg-aqua absolute bottom-0 p-[11px] w-full flex items-center justify-between rounded-br-lg rounded-bl-lg">
        <p className="text-aquaDark text-xs w-3/4">
          The Legend of Zelda - Breath of th wild
        </p>
        <hr className="border-aquaDark w-1/3" />
      </div>
    </div>
  );
}

export default HeroCardGame