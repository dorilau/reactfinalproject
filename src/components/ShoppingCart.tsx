import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShoppingCart.scss'; 

const ShoppingCart = () => {
    return (
        <Link to="/cart">
            <img src="/assets/cart-icon.png" alt="Shopping Cart" className="cart-icon" />
        </Link>
    );
};

export default ShoppingCart;