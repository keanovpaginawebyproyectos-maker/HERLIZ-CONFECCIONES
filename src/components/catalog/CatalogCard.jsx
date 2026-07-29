import React from 'react';
import { useCart } from '../../context/CartContext';

const CatalogCard = ({ product, index }) => {
  const { addToCart } = useCart();

  // Obtener nombre de categoría
  const getCategoryName = (catId) => {
    const map = {
      'bolsos': 'Bolsos',
      'camisas': 'Camisas',
      'casacas': 'Casacas',
      'chalecos': 'Chalecos',
      'gorros': 'Gorros',
      'mamelucos': 'Mamelucos',
      'mandiles': 'Mandiles',
      'mochilas': 'Mochilas',
      'pantalones': 'Pantalones',
      'polos': 'Polos',
      'vestidos': 'Vestidos'
    };
    return map[catId] || catId;
  };

  return (
    <div 
      className="product-card"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
        <button 
          className="btn-add-cart"
          onClick={() => addToCart(product)}
          aria-label="Agregar al carrito"
        >
          +
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">
          {getCategoryName(product.category)}
        </span>
        <h3>{product.name}</h3>
        <div className="product-footer">
          <div className="product-price">
            <span className="price-main">S/{product.price.toFixed(2)}</span>
          </div>
          <button 
            className="btn-add-cart-text"
            onClick={() => addToCart(product)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;