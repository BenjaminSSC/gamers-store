import React from 'react';

const FormButton = ({ onClick, children }) => {
  return (
    <button type="submit" onClick={onClick} className="bg-aqua text-white px-4 py-2 rounded ">
      {children}
    </button>
  );
};

export default FormButton;