import React from 'react';
import LoginHeader from '../components/Auth/Login/LoginHeader';
import LoginForm from '../components/Auth/Login/LoginForm';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <login>
      <Nav />
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-xs">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
     <Footer/>
    </login>
  );
};

export default Login;