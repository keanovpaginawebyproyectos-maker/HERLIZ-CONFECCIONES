import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bolsos', label: 'Bolsos' },
    { id: 'camisas', label: 'Camisas' },
    { id: 'casacas', label: 'Casacas' },
    { id: 'chalecos', label: 'Chalecos' },
    { id: 'gorros', label: 'Gorros' },
    { id: 'mamelucos', label: 'Mamelucos' },
    { id: 'mandiles', label: 'Mandiles' },
    { id: 'mochilas', label: 'Mochilas' },
    { id: 'pantalones', label: 'Pantalones' },
    { id: 'polos', label: 'Polos' },
    { id: 'vestidos', label: 'Vestidos' },
  ];

  return (
    <div className="category-filter">
      <h3>Categorías</h3>
      <div className="category-list">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;