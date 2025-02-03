import React from 'react';
import image from '../../assets/images/profile.webp'

const UserProfileAvatar = ({ avatarUrl }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <img src={image} alt="User Avatar" className="w-200 h-200 mb-2" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        CARGAR
      </button>
    </div>
  );
};

export default UserProfileAvatar;