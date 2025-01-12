import React, { useState } from 'react';
import '../styles/PlantCard.scss';

type PlantCardProps = {
  title: string;
  image: string;
  price: number;
  onAddToCart: (plant: { title: string; image: string; price: number }) => void;
};

const PlantCard: React.FC<PlantCardProps> = ({ title, image, price, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!added) {
      setAdded(true);
      onAddToCart({ title, image, price });
    }
  };

  return (
    <div className="plant-card">
      <img src={image} alt={title} className="plant-image" />
      <h3 className="plant-title">{title}</h3>
      <p className="plant-price">${price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart} disabled={added}>
        {added ? 'Added to cart!' : 'Add to cart'}
      </button>
    </div>
  );
};

export default PlantCard;
