import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Products.scss';

const Products = () => {
  return (
    <div className="products-page">
      <header className="header">
      <Navbar />
      </header>

      {/* Product List */}
      <div className="product-list">
        <h1>Our Products</h1>
        <p>Browse our collection of beautiful houseplants!</p>
        {/* Add your product cards or items here */}
        <div className="product-card">Product 1</div>
        <div className="product-card">Product 2</div>
        <div className="product-card">Product 3</div>
        {/* Repeat for more products */}
      </div>
    </div>
  );
};

export default Products;
