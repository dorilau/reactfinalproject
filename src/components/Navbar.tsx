import React from 'react';
import '../styles/Navbar.scss'
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="./assets/logo.png" alt="Paradise Nursery Logo" className="logo" />
        <div className="branding">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="slogan">Your indoor plant paradise</p>
        </div>
      </div>

      <div className="navbar-middle">
        <h2 className="title">Plants</h2>
      </div>

      <div className="navbar-right">
        <div className="shopping-cart">
          <Cart />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;