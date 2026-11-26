import React from 'react';
import HeroCarousel from '../../components/catalog/HeroCarousel/HeroCarousel';
import HeroSection from '../../components/home/Hero/HeroSection';
import '../Pages.css';

const HomePage = () => {
  return (
    <div className="page-container">
      {/* Carrusel FULL WIDTH (full-bleed, sale del container) */}
      <HeroCarousel />

      {/* Contenido centrado */}
      <HeroSection />

      {/* Aquí va el resto de tu HomePage */}
    </div>
  );
};

export default HomePage;