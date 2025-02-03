import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const ShoppingCart = () => {
  // Aquí podrías tener un estado para mantener los productos en el carrito
  const cartItems = [
    { id: 1, name: 'Consola de Juegos X', price: '499.99', quantity: 1 },
    { id: 2, name: 'Juego de Aventura', price: '59.99', quantity: 2 }
  ];

  return (
    <cart>
      <Nav/>
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map(item => (
            <li key={item.id} className="border p-4 rounded">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <div>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-right">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Finalizar Compra</button>
      </div>
    </div>
      <Footer/>
    </cart>
  );
};

export default ShoppingCart;