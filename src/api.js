import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const register = async (email, password) => {
  try {
    const response = await api.post('/register', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Error al registrar el usuario' };
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Error al iniciar sesión' };
  }
};

export const getProtectedData = async (token) => {
  try {
    const response = await api.get('/protected', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Error al acceder a la ruta protegida' };
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await api.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Error al obtener datos del usuario' };
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Error al obtener producto' };
  }
};

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    console.log(response.data)
    // return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Error al obtener productos' };
  }
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;