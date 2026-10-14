import React from 'react';
import './CatalogCard.css';

const CatalogCard = ({ product, index }) => {
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
    <article className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <span className="product-category">
          {getCategoryName(product.category)}
        </span>
        <h3>{product.name}</h3>
      </div>
    </article>
  );
};

export default CatalogCard;