import React from 'react';

const UserProfileInfo = ({ name, email, lastPost }) => {
  return (
    <div className="mb-4 text-white">
      <p className="mb-2"><strong>Nombre:</strong> {name}</p>
      <p className="mb-2"><strong>Email:</strong> {email}</p>
      <p><strong>Último Post:</strong> {lastPost}</p>
    </div>
  );
};

export default UserProfileInfo;