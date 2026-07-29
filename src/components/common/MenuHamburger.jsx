import React from 'react';
import './MenuHamburger.css';

const MenuHamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button 
      className={`hamburger ${isOpen ? 'active' : ''}`} 
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Menú"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuHamburger;