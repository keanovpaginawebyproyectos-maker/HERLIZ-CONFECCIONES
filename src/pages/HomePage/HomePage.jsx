import React from 'react';
import HeroSection from '../../components/home/Hero/HeroSection'; // Corregido: nombre real del archivo
import '../Pages.css'; //Sube un nivel para salir de HomePage y encontrar Pages.css

const HomePage = () => {
  return (
    <div className="page-container">
      <HeroSection />
      {/* Aquí va el resto de tu HomePage */}
    </div>
  );
};

export default HomePage;