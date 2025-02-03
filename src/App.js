import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import PostForm from './pages/PostForm';
import UserProfile from './pages/UserProfile';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Products from './pages/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 return(
  <AuthProvider>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/post" element={<PostForm />} />
    <Route path="/products" element={<Products />} />
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/product/:productId" element={<ProductDetail />} />
    <Route path="/cart" element={<ShoppingCart />} />  
   </Routes>
   <ToastContainer />
  </AuthProvider>
)}

export default App;
