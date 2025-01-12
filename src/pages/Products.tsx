import React from 'react';
import PlantCard from '../components/PlantCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../CartSlice';
import '../styles/Products.scss';

const Products: React.FC = () => {
  const dispatch = useDispatch();

  const hardyPlants = [
    { title: 'Snake Plant', image: '/images/snake-plant.jpg', price: 25 },
    { title: 'ZZ Plant', image: '/images/zz-plant.jpg', price: 30 },
    { title: 'Jade Plant', image: '/images/jade-plant.jpg', price: 20 },
    { title: 'Aloe Vera', image: '/images/aloe-vera.jpg', price: 15 },
  ];

  const nonToxicPlants = [
    { title: 'Spider Plant', image: '/images/spider-plant.jpg', price: 18 },
    { title: 'Parlor Palm', image: '/images/parlor-palm.jpg', price: 22 },
    { title: 'Calathea', image: '/images/calathea.jpg', price: 28 },
    { title: 'Boston Fern', image: '/images/boston-fern.jpg', price: 24 },
  ];

  const handleAddToCart = (plant: { title: string; image: string; price: number }) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="products-page">
      <h1>Our Plants</h1>

      <div className="plants-section">
        <h2>Hardy Plants</h2>
        <div className="plants-grid">
          {hardyPlants.map((plant) => (
            <PlantCard
              key={plant.title}
              title={plant.title}
              image={plant.image}
              price={plant.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      <div className="plants-section">
        <h2>Non-Toxic Plants for Cats</h2>
        <div className="plants-grid">
          {nonToxicPlants.map((plant) => (
            <PlantCard
              key={plant.title}
              title={plant.title}
              image={plant.image}
              price={plant.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
