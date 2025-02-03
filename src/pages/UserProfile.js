import React, { useState, useEffect } from 'react';
import UserProfileAvatar from '../components/UserProfile/UserProfileAvatar';
import UserOrders from '../components/UserProfile/UserOrders';
import UserProfileHeader from '../components/UserProfile/UserProfileHeader';
import UserProfileInfo from '../components/UserProfile/UserProfileInfo';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const UserProfile = () => {
  const [user, setUser] = useState({ name: '', email: '', lastPost: '', avatarUrl: '../assets/images/default-avatar.png' });
  const [orders, setOrders] = useState([
    { id: 'xxxxx1', items: [{ name: 'God of war 2', quantity: 1 }, { name: 'Horizon zero down', quantity: 3 }], total: 120000 },
    // Añade más pedidos si es necesario
  ]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('registeredUser')) || { 
      name: 'Juan Pérez', 
      email: 'juan.perez@example.com', 
      lastPost: '¿Cómo mejorar tu juego en línea?',
      avatarUrl: '../assets/images/avatar.webp' 
    };
    setUser(storedUser);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <UserProfileHeader />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/4 lg:mr-4">
          <UserProfileAvatar avatarUrl={user.avatarUrl} />
        </div>
        <div className="lg:w-3/4">
          <UserProfileInfo name={user.name} email={user.email} lastPost={user.lastPost} />
          <UserOrders orders={orders} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;