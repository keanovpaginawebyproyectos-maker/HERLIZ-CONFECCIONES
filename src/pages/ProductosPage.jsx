import React from 'react';
import CatalogGrid from '../components/catalog/CatalogGrid';
import HeroCarousel from '../components/catalog/HeroCarousel';

const ProductosPage = () => {
  return (
    <div className="productos-page">
      <HeroCarousel />
      <CatalogGrid />
    </div>
  );
};

export default ProductosPage;