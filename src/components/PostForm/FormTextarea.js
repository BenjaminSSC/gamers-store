import React from 'react';

const FormTextarea = ({ label, value, onChange, rows, required }) => {
  return (
    <div>
      <label className="block mb-2">{label}:</label>
      <textarea value={value} onChange={onChange} className="w-full p-2 border rounded" rows={rows} required={required}></textarea>
    </div>
  );
};

export default FormTextarea;