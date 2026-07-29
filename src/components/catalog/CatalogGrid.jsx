import React, { useState } from 'react';
import { products } from '../../data/catalogData';
import CategoryFilter from './CategoryFilter';
import CatalogCard from './CatalogCard';
import './CatalogGrid.css';

const CatalogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="catalog-container fade-in">
      <div className="catalog-header">
        <h1>Nuestra Colección</h1>
        <p>Descubre prendas exclusivas con la mejor calidad</p>
      </div>

      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <p>No hay productos en esta categoría</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <CatalogCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogGrid;