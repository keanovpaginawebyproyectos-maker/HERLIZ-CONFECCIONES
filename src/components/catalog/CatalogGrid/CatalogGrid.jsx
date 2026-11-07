import React, { useState } from 'react';
import { products } from '../../../data/catalogData';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import CatalogCard from '../CatalogCard/CatalogCard';
import './CatalogGrid.css';

const CatalogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <h1>Nuestra Colección</h1>
        <p>Descubre prendas exclusivas con la mejor calidad</p>
      </div>

      <div className="catalog-layout">
        <aside className="catalog-sidebar">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </aside>

        <section className="catalog-products">
          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p>No hay productos en esta categoría</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <CatalogCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CatalogGrid;