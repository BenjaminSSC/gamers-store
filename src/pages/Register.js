import React from 'react';
import RegisterHeader from '../components/Auth/Register/RegisterHeader';
import RegisterForm from '../components/Auth/Register/RegisterForm';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <register className="min-h-screen">
      <Nav/>
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-xs">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </div>
      <Footer/>
    </register>
  );
};

export default Register;