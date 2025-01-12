import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; 
import Navbar from './components/Navbar';
import Products from './pages/Products';
import ShoppingCartPage from './pages/ShoppingCart';
import LandingPage from './pages/Landing';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const ConditionalNavbar: React.FC = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/']; 

  return !hideNavbarPaths.includes(location.pathname) ? <Navbar /> : null;
};

export default App;
