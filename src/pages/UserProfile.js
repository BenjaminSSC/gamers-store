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
  const { user, token, loading } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    lastPost: '',
    avatarUrl: '../assets/images/default-avatar.png',
  });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (loading || !token) return;

      try {
        const data = await getUserProfile(token);
        setProfileData({
          name: data.name || 'Usuario',
          email: data.email || '',
          lastPost: data.lastPost || 'Sin publicaciones recientes',
          avatarUrl: data.avatarUrl || '../assets/images/default-avatar.png',
        });
        setOrders(data.orders || [
          { id: 'xxxxx1', 
            items: [{ name: 'God of War 2', quantity: 1 }, 
                    { name: 'Horizon Zero Dawn', quantity: 3 }], 
            total: 120000 },
        ]);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        setProfileData({
          name: user?.username || 'Usuario',
          email: user?.username || '',
          lastPost: 'Sin publicaciones recientes',
          avatarUrl: '../assets/images/default-avatar.png',
        });
        setOrders([
          { id: 'xxxxx1', 
            items: [{ name: 'God of War 2', quantity: 1 }, 
                    { name: 'Horizon Zero Dawn', quantity: 3 }], 
            total: 120000 },
        ]);
      }
    };

    fetchUserProfile();
  }, [user, token, loading]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="bg-black min-h-screen">
      <Nav />
      <UserProfileHeader />
      <div className="flex flex-col lg:flex-row min-h-screen pt-24">
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