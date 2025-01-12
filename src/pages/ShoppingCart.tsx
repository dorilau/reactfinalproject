import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ShoppingCartPage: React.FC = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <div className="shopping-cart-page">
      <h1>Your Cart</h1>
      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCartPage;
