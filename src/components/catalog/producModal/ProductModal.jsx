import React, { useEffect } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    if (!product) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar"
          type="button"
        >
          ✕
        </button>

        <div className="modal-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="modal-image"
          />
        </div>

        <div className="modal-info">
          <h2>{product.name}</h2>
          {product.price && <p className="modal-price">{product.price}</p>}
          {product.description && (
            <p className="modal-description">{product.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;