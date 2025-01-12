import React from 'react';
import '../styles/Navbar.scss'
import ShoppingCart from '../components/ShoppingCart';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section: Logo and Branding */}
      <div className="navbar-left">
        <img src="./assets/logo.png" alt="Paradise Nursery Logo" className="logo" />
        <div className="branding">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="slogan">Your indoor plant paradise</p>
        </div>
      </div>

      {/* Middle Section: Title */}
      <div className="navbar-middle">
        <h2 className="title">Plants</h2>
      </div>

      {/* Right Section: Shopping Cart */}
      <div className="navbar-right">
        <div className="shopping-cart">
          {/* Placeholder for Shopping Cart */}
          <ShoppingCart />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;