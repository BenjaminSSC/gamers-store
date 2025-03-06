import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <Nav />
      <div className="p-4 min-h-screen pt-24 text-white">
        <h1 className="text-2xl mb-4">Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map(item => (
                <li key={item.id} className="border p-4 rounded bg-gray-800">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p>Precio: ${item.price.toFixed(2)}</p>
                      <p>Cantidad: {item.quantity}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="mr-4">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="p-2 text-left">Resumen</th>
                    <th className="p-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-800">
                    <td className="p-2">Precio total</td>
                    <td className="p-2 text-right">${totalPrice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="mt-4 text-right">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Finalizar Compra
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;