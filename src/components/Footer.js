import logo from '../assets/images/logogamerstore.svg'

const Footer = () => {
    return (
      <footer className="flex flex-row">
        <div className="bg-aquaDark basis-1/3 py-5 px-7">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="bg-aqua basis-2/3 text-right flex items-center justify-end pr-7">
          <p className="text-white">
            Gamer Commerce - Todos os direitos reservados
          </p>
        </div>
      </footer>
);}

export default Footer;