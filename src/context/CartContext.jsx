import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('vivian_cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          setCart(parsed);
        }
      } catch (e) {
        console.error('Error parsing cart:', e);
        setCart([]);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('vivian_cart', JSON.stringify(cart || []));
  }, [cart]);

  const addToCart = (service) => {
    setCart(prev => {
      const currentCart = Array.isArray(prev) ? prev : [];
      const existing = currentCart.find(item => item.id === service.id);
      if (existing) {
        return currentCart.map(item =>
          item.id === service.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...currentCart, { ...service, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => (Array.isArray(prev) ? prev : []).filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => {
      const currentCart = Array.isArray(prev) ? prev : [];
      return currentCart.map(item => {
        if (item.id === id) {
          const newQty = (item.quantity || 1) + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = (Array.isArray(cart) ? cart : []).reduce((acc, item) => acc + (item.quantity || 0), 0);

  const generateWhatsAppMessage = () => {
    const currentCart = Array.isArray(cart) ? cart : [];
    if (currentCart.length === 0) return null;
    const intro = 'Hola, me gustaría reservar los siguientes servicios en Spa Vivian:';
    const servicesList = currentCart.map(item => `${item.quantity || 1}x ${item.title}`).join('%0A- ');
    const message = `${intro}%0A%0A- ${servicesList}%0A%0AMi nombre es: `;
    return message;
  };

  const value = {
    cart: Array.isArray(cart) ? cart : [],
    isOpen,
    setIsOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    generateWhatsAppMessage
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
