import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.scss';

const LandingPage = () => {
  return (
      <div className="content">
        <div className="left-section">
         <p className="landing-heading">Welcome to<br></br> Paradise Nursery </p>
         <Link to="/products">
          <button className="start-button">Get Started</button>
        </Link>        
        </div>
        <div className="right-section">
            <p className="intro">At Paradise Nursery, we bring the beauty of nature into your home. Explore our wide selection of houseplants, each carefully chosen to enhance your living space and purify your environment. Whether you're a seasoned plant parent or just starting your green journey, we have something special for everyone. Let us help you create your very own indoor paradise!</p>
        </div>
      </div>
  );
};

export default LandingPage;