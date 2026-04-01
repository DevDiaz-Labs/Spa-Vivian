import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const CartWidget = () => {
  const { totalItems, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-6 right-6 z-50 bg-gold text-white p-4 rounded-full shadow-2xl hover:bg-gold/90 transition-all duration-300 hover:scale-110"
      aria-label="Abrir bolsa de servicios"
    >
      <ShoppingBag size={24} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-rich-black text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-medium">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartWidget;
