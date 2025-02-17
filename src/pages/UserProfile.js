import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { getUserProfile } from '../api';
import UserProfileAvatar from '../components/UserProfile/UserProfileAvatar';
import UserProfileHeader from '../components/UserProfile/UserProfileHeader';
import UserProfileInfo from '../components/UserProfile/UserProfileInfo';
import UserOrders from '../components/UserProfile/UserOrders';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const UserProfile = () => {
  const { user, token, loading } = useAuth(); // Obtiene el usuario, token y estado de carga desde el contexto
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    lastPost: '',
    avatarUrl: '../assets/images/default-avatar.png',
  });
  const [orders, setOrders] = useState([
    { id: 'xxxxx1', items: [{ name: 'God of war 2', quantity: 1 }, { name: 'Horizon zero down', quantity: 3 }], total: 120000 },
    // Añade más pedidos si es necesario
  ]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (loading || !token) return; // Espera a que el contexto termine de cargar y haya un token

      try {
        const data = await getUserProfile(token); // Obtiene los datos del usuario desde el backend
        setProfileData({
          name: data.name || 'Usuario',
          email: data.email || '',
          lastPost: data.lastPost || 'Sin publicaciones recientes',
          avatarUrl: data.avatarUrl || '../assets/images/default-avatar.png',
        });
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        // Si hay un error, usa datos por defecto o los datos básicos del contexto
        setProfileData({
          name: user?.username || 'Usuario',
          email: user?.username || '',
          lastPost: 'Sin publicaciones recientes',
          avatarUrl: '../assets/images/default-avatar.png',
        });
      }
    };

    fetchUserProfile();
  }, [user, token, loading]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <UserProfileHeader />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/4 lg:mr-4">
          <UserProfileAvatar avatarUrl={profileData.avatarUrl} />
        </div>
        <div className="lg:w-3/4">
          <UserProfileInfo name={profileData.name} email={profileData.email} lastPost={profileData.lastPost} />
          <UserOrders orders={orders} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;