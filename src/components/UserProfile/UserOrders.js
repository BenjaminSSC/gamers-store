import React from 'react';

const UserOrders = ({ orders }) => {
  return (
    <div className="text-white">
      <h2 className="text-xl mb-4">Mis pedidos</h2>
      {orders.map((order, index) => (
        <div key={index} className="mb-2">
          <p><strong>ID Compra:</strong> {order.id}</p>
          {order.items.map((item, itemIndex) => (
            <p key={itemIndex} className="ml-4">{item.name} - Cantidad: {item.quantity}</p>
          ))}
        </div>
      ))}
      <p className="mt-2"><strong>Total:</strong> {orders.reduce((total, order) => total + order.total, 0)}</p>
      <hr className="my-4 border-t border-gray-600" />
    </div>
  );
};

export default UserOrders;