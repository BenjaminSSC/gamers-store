import React from 'react';

const FormButton = ({ onClick, children }) => {
  return (
    <button type="submit" onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
};

export default FormButton;