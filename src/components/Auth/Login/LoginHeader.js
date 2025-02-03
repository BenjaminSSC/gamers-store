import React from 'react';
import logo from '../../../assets/images/logogamerstore.svg'

const LoginHeader = () => {
  return (
    <div className="text-center mb-6">
     <a href="/">
       <img src={logo} alt="Gamer Commerce Logo" className="w-full mx-auto mb-2" />    
     </a>
    </div>
  );
};

export default LoginHeader;