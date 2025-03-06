import React from 'react';

const FormTextarea = ({ label, value, onChange, rows, required }) => {
  return (
    <div>
      <label className="block mb-2 text-white">{label}:</label>
      <textarea value={value} onChange={onChange} className="w-full p-2 border bg-gray-700 rounded" rows={rows} required={required}></textarea>
    </div>
  );
};

export default FormTextarea;