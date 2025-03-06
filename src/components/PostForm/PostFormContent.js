// src/components/PostForm/PostFormContent.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PostFormHeader from './PostFormHeader';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

const PostFormContent = ({ onProductCreated }) => {
  const [nombreJuego, setNombreJuego] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [plataforma, setPlataforma] = useState('1');
  const [usado, setUsado] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Debes iniciar sesión para crear un producto');
      return;
    }

    const formData = new FormData();
    formData.append('nombre_juego', nombreJuego);
    formData.append('descripcion', descripcion);
    formData.append('precio', parseFloat(precio));
    formData.append('id_plataforma', parseInt(plataforma));
    formData.append('usado', usado);
    if (imageFile) formData.append('image', imageFile);

    try {
      const response = await fetch('https://backproyectogames-production-f162.up.railway.app/api/products', { 
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear el producto');
      }

      const newProduct = await response.json();
      onProductCreated(newProduct);
      toast.success('Producto creado exitosamente');
      
      setNombreJuego('');
      setDescripcion('');
      setPrecio('');
      setImageFile(null);
      setImagePreview(null);
      setPlataforma('1');
      setUsado(false);
    } catch (error) {
      toast.error(error.message || 'Error al enviar el producto');
    }
  };

  return (
    <div className="w-[1000px] bg-gray-800 p-6 rounded-lg shadow-lg">
      <PostFormHeader />
      <form onSubmit={handleSubmit} className="space-y-8 text-white">
        <FormInput label="Nombre del Juego" value={nombreJuego} onChange={(e) => setNombreJuego(e.target.value)} required />
        <FormTextarea label="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="5" />
        <FormInput label="Precio" type="number" step="0.01" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        <div>
          <label className="block mb-2 text-white">Imagen:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 text-white bg-gray-700 rounded" />
          {imagePreview && (
            <img src={imagePreview} alt="Previsualización" className="mt-2 w-32 h-32 object-cover rounded" />
          )}
        </div>
        <div>
          <label className="block mb-2 text-white">Plataforma:</label>
          <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)} className="w-full p-2 bg-gray-700 text-white rounded">
            <option value="1">PS4</option>
            <option value="2">Nintendo Switch</option>
            <option value="3">Xbox One</option>
          </select>
        </div>
        <div className="flex items-center ">
          <input
            type="checkbox"
            checked={usado}
            onChange={(e) => setUsado(e.target.checked)}
            className="h-5 w-5 text-blue-600 mr-2"
          />
          <label className="text-white">¿Usado?</label>
        </div>
        <div className="flex justify-center">
            <FormButton onClick={handleSubmit}>Publicar Producto</FormButton>
        </div>
      </form>
    </div>
  );
};

export default PostFormContent;