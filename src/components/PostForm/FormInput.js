import React from 'react';

const FormInput = ({ label, value, onChange, required }) => {
  return (
    <div>
      <label className="block mb-2 text-white">{label}:</label>
      <input type="text" value={value} onChange={onChange} className="w-full p-2 border rounded bg-gray-700" required={required} />
    </div>
  );
};

export default FormInput;