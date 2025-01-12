import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.scss'; 

const Cart = () => {
    return (
        <Link to="/cart">
            <img src="/assets/cart-icon.png" alt="Shopping Cart" className="cart-icon" />
        </Link>
    );
};

export default Cart;