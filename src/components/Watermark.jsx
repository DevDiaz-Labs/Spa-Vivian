import React from 'react';
import Logo from '../assets/logo-spa-vivian.webp';

const Watermark = ({ className = "absolute bottom-4 right-4 w-16 opacity-70 pointer-events-none z-20" }) => {
  return (
    <img 
      src={Logo} 
      alt="Logo Watermark" 
      className={className}
    />
  );
};

export default Watermark;
