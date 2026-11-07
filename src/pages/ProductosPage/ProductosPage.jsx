import React from 'react';
//  Sube dos niveles (../../) para salir de ProductosPage y de pages, y entra a components/catalog/
import HeroCarousel from '../../components/catalog/HeroCarousel/HeroCarousel'; 
import CatalogGrid from '../../components/catalog/CatalogGrid/CatalogGrid'; 

//  Sube un nivel (../) para salir de ProductosPage y encontrar Pages.css en la carpeta pages
import '../Pages.css'; 

const ProductosPage = () => {
  return (
    <div className="page-container">
      <HeroCarousel />
      <CatalogGrid />
    </div>
  );
};

export default ProductosPage;