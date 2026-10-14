import React, { useState, useEffect, useRef } from 'react';
import { categories } from '../../data/catalogData';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentCategory = categories.find(c => c.id === selectedCategory);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSelect = (id) => {
    onCategoryChange(id);
    setIsOpen(false);
  };

  return (
    <div className="category-filter-wrapper">
      <h3 className="category-filter-title">Categorías</h3>

      {/* ========== VERSIÓN PC: LISTA VERTICAL ========== */}
      <ul className="category-filter">
        {categories.map(cat => (
          <li key={cat.id}>
            <button
              type="button"
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>

      {/* ========== VERSIÓN MÓVIL: SELECTOR DESPLEGABLE ========== */}
      <div className="category-dropdown" ref={dropdownRef}>
        <button
          type="button"
          className={`category-dropdown-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
        >
          <span>{currentCategory ? currentCategory.label : '— SELECCIONAR —'}</span>
          <span className={`dropdown-arrow ${isOpen ? 'up' : ''}`}>▾</span>
        </button>

        {isOpen && (
          <ul className="category-dropdown-menu">
            {categories.map(cat => (
              <li key={cat.id}>
                <button
                  type="button"
                  className={`category-dropdown-item ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleSelect(cat.id)}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;