import React from 'react';

const FormInput = ({ label, value, onChange, required }) => {
  return (
    <div>
      <label className="block mb-2">{label}:</label>
      <input type="text" value={value} onChange={onChange} className="w-full p-2 border rounded" required={required} />
    </div>
  );
};

export default FormInput;