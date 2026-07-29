import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getWhatsAppMessage = () => {
    const fecha = new Date().toLocaleDateString('es-PE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const hora = new Date().toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit'
    });

    let mensaje = ' *COTIZACIÓN HERLIZ CONFECCIONES*\n';
    mensaje += ` ${fecha} - ${hora}\n`;
    mensaje += '━━━━━━━━━━━━━━━━━━━━━━\n\n';
    mensaje += '* DETALLE DEL PEDIDO:*\n\n';

    cartItems.forEach((item, index) => {
      mensaje += `${index + 1}. *${item.name}*\n`;
      mensaje += `   Cantidad: ${item.quantity}\n`;
      mensaje += `   Precio unitario: S/${item.price.toFixed(2)}\n`;
      mensaje += `   Subtotal: S/${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    mensaje += '━━━━━━━━━━━━━━━━━━━━━━\n';
    mensaje += `* TOTAL: S/${getTotalPrice().toFixed(2)}*\n`;
    mensaje += ` *${getTotalItems()} productos* seleccionados\n\n`;
    mensaje += '━━━━━━━━━━━━━━━━━━━━━━\n';
    mensaje += '*Dirección:* Jr. Gamarra N° 1010 - 2do. Piso Tienda 205\n';
    mensaje += '*Contacto:* 963 382 211 / 980 931 321\n\n';
    mensaje += '*¡Esperamos su confirmación!*';

    return encodeURIComponent(mensaje);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    getWhatsAppMessage,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};