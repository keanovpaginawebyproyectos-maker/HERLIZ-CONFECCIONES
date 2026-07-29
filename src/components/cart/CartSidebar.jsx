import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
    getWhatsAppMessage,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const message = getWhatsAppMessage();
    window.open(`https://wa.me/51980931321?text=${message}`, '_blank');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Mi Pedido</h2>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <p>Tu carrito está vacío</p>
            <button className="btn-seguir-comprando" onClick={() => setIsCartOpen(false)}>
              Seguir comprando
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <span className="item-price">S/{item.price.toFixed(2)}</span>
                    <div className="cart-item-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className="btn-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>S/{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="cart-summary">
                <span>{getTotalItems()} productos seleccionados</span>
              </div>
              <button className="btn-checkout" onClick={handleCheckout}>
                Enviar cotización por WhatsApp
              </button>
              <button className="btn-clear" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;