import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RitualsPage from './pages/RitualsPage';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-soft-blush selection:bg-rich-black selection:text-[#D4AF37]">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@200;300;400;500&display=swap');
        `}</style>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rituales" element={<RitualsPage />} />
        </Routes>

        <WhatsAppButton />

      </div>
    </Router>
  );
};

export default App;
