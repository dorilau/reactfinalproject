import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import ProductPage from './pages/Products'; // Assuming you have a ProductPage component
import ShoppingCartPage from './pages/ShoppingCart';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/shoppingcart" element={<ShoppingCartPage />} />
    </Routes>
  </Router>
  );
}

export default App;