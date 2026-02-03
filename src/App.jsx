import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './assets/logo-spa-vivian.webp'
import Masaje from './assets/masaje.webp';
import Descontractura from './assets/descontracturante.webp';
import Reductor from './assets/reductor.webp';
import Facial from './assets/facial.webp';
import { Menu, X, MapPin, Phone, Instagram, ArrowRight, Minus, MessageCircle, Facebook } from 'lucide-react'

const THEME = {
  colors: {
    bg: '#FFF0F5',
    text: '#1C1917',
    accent: '#D4AF37',
    footerBg: '#000000',
  },
  fonts: {
    serif: '"Cormorant Garamond", serif',
    sans: '"Montserrat", sans-serif',
  }
};

const SERVICES = [
  {
    id: "01",
    title: "Masaje Relajante",
    description: "Una sinfonía de movimientos fluidos que disuelven la tensión y armonizan cuerpo y mente.",
    image: Masaje
  },
  {
    id: "02",
    title: "Descontracturante",
    description: "Terapia profunda enfocada en liberar la rigidez muscular y restaurar la movilidad natural.",
    image: Descontractura
  },
  {
    id: "03",
    title: "Masaje Reductivo",
    description: "Técnica vigorosa que remodela la silueta y estimula la vitalidad de la piel.",
    image: Reductor
  },
  {
    id: "04",
    title: "Facial Hidratante",
    description: "Ritual de luminosidad que nutre profundamente y revela el resplandor natural de tu rostro.",
    image: Facial
  }
];

const SOCIAL = {
  whatsapp: "https://wa.me/525514753188",
  instagram: "https://www.instagram.com/spa_vivian/"
};

const Divider = () => (
  <div className="w-full h-[1px] bg-[#1C1917]/10 my-8" />
);

const Button = ({ children, variant = 'outline', className = '', onClick }) => {
  const base = "px-10 py-4 uppercase tracking-[0.2em] text-xs font-sans font-medium transition-all duration-700 relative overflow-hidden group";
  const styles = {
    outline: "border border-[#D4AF37] text-[#1C1917] hover:text-white",
    solid: "bg-[#D4AF37] text-white border border-[#D4AF37]",
    ghost: "text-[#1C1917] border-b border-[#1C1917]/20 hover:border-[#D4AF37] px-0 py-2 hover:pl-4"
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'outline' && (
        <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out z-0" />
      )}
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-[#11100F] backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
        }`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Left: logo image - hidden at top, fades in when scrolled */}
          <div className="flex items-center">
            <motion.img
              src={Logo}
              alt="SPA VIVIAN"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -6 }}
              transition={{ duration: 0.45 }}
              className="h-10 w-auto object-contain transition-opacity duration-300"
            />
          </div>

          <div className="hidden md:flex items-center gap-12">
            {['Filosofía', 'Rituales', 'Ubicación'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xs uppercase tracking-[0.2em] font-sans hover:text-[#D4AF37] transition-colors duration-500 ${scrolled ? 'text-white' : 'text-white/90'
                  }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => window.open(SOCIAL.whatsapp, '_blank')}
              className={`px-6 py-2 border text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white ${scrolled ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-white text-white'
                }`}
            >
              Reservar
            </button>
          </div>

          <button
            className="md:hidden z-50 text-[#D4AF37]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} color={'white'} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#FFF0F5] z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {['Filosofía', 'Rituales', 'Ubicación'].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl text-[#1C1917]"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000"
          alt="Spa Atmosphere"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <p className="text-[#D4AF37] font-sans text-xs md:text-sm tracking-[0.4em] uppercase">
            Bienvenida al Santuario
          </p>
          <motion.img
            src={Logo}
            alt="SPA VIVIAN"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mx-auto w-64 md:w-80 lg:w-96 z-30 object-contain drop-shadow-2xl"
          />

          <p className="font-serif text-xl md:text-3xl text-white/80 italic font-light tracking-wide mt-6">
            "El sutil arte de la relajación absoluta"
          </p>

          <div className="pt-12 flex justify-center">
            <button
              onClick={() => document.getElementById('rituales').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center px-10 py-4 border border-[#D4AF37]/50 backdrop-blur-md bg-white/5 text-white tracking-[0.3em] font-sans text-xs uppercase hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-700"
            >
              Explorar Rituales
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const ServiceItem = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] w-full">
      {/* Image Section */}
      <div className={`w-full md:w-1/2 relative p-12 md:p-24 ${isEven ? 'md:order-2' : 'md:order-1'} flex items-center justify-center`}>
        <div className="relative w-full max-w-lg aspect-[4/5]">
          {/* Gold Frame */}
          <div className={`absolute top-4 ${isEven ? '-left-4' : '-right-4'} w-full h-full border border-[#D4AF37] z-0`} />

          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className="relative z-10 w-full h-full object-cover shadow-xl"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className={`w-full md:w-1/2 bg-[#FFF0F5] flex flex-col justify-center p-12 md:p-24 lg:p-32 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <span className="text-[#D4AF37] text-sm tracking-[0.3em] font-sans mb-6">0{index + 1}</span>
        <h3 className="font-serif text-4xl md:text-5xl text-[#1C1917] mb-8 leading-tight">
          {service.title}
        </h3>
        <p className="font-sans text-gray-600 leading-relaxed mb-12 max-w-md">
          {service.description}
        </p>
        <button
          onClick={() => window.open(SOCIAL.whatsapp, '_blank')}
          className="text-[#D4AF37] text-xs tracking-[0.2em] font-sans uppercase border-b border-[#D4AF37] pb-2 w-fit hover:text-black hover:border-black transition-colors duration-500"
        >
          Reservar Experiencia
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="rituales" className="bg-[#FFF0F5]">
      <div className="py-32 container mx-auto px-6 text-center">
        <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase block mb-6">
          Menú de Servicios
        </span>
        <h2 className="font-serif text-5xl md:text-6xl text-[#1C1917]">
          Nuestra Colección
        </h2>
      </div>

      <div className="flex flex-col">
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

const QuoteIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
  </svg>
);

const ParallaxQuote = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621262693892-0b31ac7c4613?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-80"
          alt="Zen Background"
        />
        <div className="absolute inset-0 bg-[#1C1917]/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <QuoteIcon className="mx-auto text-white/40 mb-8 w-12 md:w-16" />
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#FFF0F5] leading-tight italic">
            "Desconecta para <br /> reconectar con tu esencia"
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="ubicación" className="bg-gradient-to-b from-[#11100F] to-black text-[#FFF0F5] py-24 border-t border-[#D4AF37]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

          {/* Column 1: Info & Social (col-span-4) */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="font-serif text-3xl tracking-widest text-[#D4AF37] mb-4">SPA VIVIAN</h3>

            <div className="flex flex-col gap-5 mt-4">
              {/* WhatsApp */}
              <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 group w-fit transition-all duration-300 hover:translate-x-2">
                <div className="p-2 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#11100F] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-gray-400 font-sans text-sm tracking-widest group-hover:text-[#D4AF37] transition-colors duration-300">WhatsApp</span>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/adyperezc/photos" target="_blank" rel="noreferrer" className="flex items-center gap-4 group w-fit transition-all duration-300 hover:translate-x-2">
                <div className="p-2 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#11100F] transition-all duration-300">
                  <Facebook size={20} />
                </div>
                <span className="text-gray-400 font-sans text-sm tracking-widest group-hover:text-[#D4AF37] transition-colors duration-300">Facebook</span>
              </a>

              {/* Instagram */}
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 group w-fit transition-all duration-300 hover:translate-x-2">
                <div className="p-2 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#11100F] transition-all duration-300">
                  <Instagram size={20} />
                </div>
                <span className="text-gray-400 font-sans text-sm tracking-widest group-hover:text-[#D4AF37] transition-colors duration-300">Instagram</span>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@spa.vivian0?_r=1&_t=ZS-93bR7GiYU2T" target="_blank" rel="noreferrer" className="flex items-center gap-4 group w-fit transition-all duration-300 hover:translate-x-2">
                <div className="p-2 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#11100F] transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </div>
                <span className="text-gray-400 font-sans text-sm tracking-widest group-hover:text-[#D4AF37] transition-colors duration-300">TikTok</span>
              </a>
            </div>
          </div>

          {/* Column 2: Address (col-span-3) */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-6">Visítanos</h4>

            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-2 bg-white/5 rounded-full group-hover:bg-[#D4AF37]/20 transition-colors">
                  <MapPin className="text-[#D4AF37]" size={18} />
                </div>
                <div className="space-y-2">
                  <p className="font-sans text-white/80 font-light text-sm leading-relaxed">
                    Olcuautitlan, Cantera Puente de Piedra, Iztapalapa
                  </p>
                  <p className="font-sans text-white/60 font-light text-sm leading-relaxed">
                    CDMX 14040
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="mt-1 p-2 bg-white/5 rounded-full group-hover:bg-[#D4AF37]/20 transition-colors">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                  </div>
                </div>
                <div className="font-sans text-white/60 font-light text-sm leading-relaxed space-y-1">
                  <p>Lun - Vie: 09:00 - 20:00</p>
                  <p>Sábados: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Map (col-span-5) */}
          <div className="lg:col-span-5 relative h-[300px] w-full rounded-2xl overflow-hidden group shadow-2xl shadow-black/50 border border-[#D4AF37]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.364406026524!2d-99.1668786!3d19.3099955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzM2LjAiTiA5OcKwMTAnMDAuOCJX!5e0!3m2!1sen!2smx!4v1614000000000!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            ></iframe>

            {/* Floating Card Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <MapPin size={14} className="text-black" />
                </div>
                <div>
                  <p className="font-serif text-white text-lg leading-none">Spa Vivian</p>
                  <p className="text-[10px] text-white/70 uppercase tracking-wider mt-1">Ver Ubicación</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex justify-center text-[10px] tracking-widest uppercase text-white/20 font-sans">
          <p>© 2026 Spa Vivian. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF0F5] selection:bg-[#1C1917] selection:text-[#D4AF37]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Montserrat:wght@200;300;400;500&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <ParallaxQuote />
      </main>
      <Footer />
      <motion.a
        href={SOCIAL.whatsapp}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-50 mix-blend-difference text-white"
      >
        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-500 cursor-pointer backdrop-blur-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.a>

    </div>
  );
};

export default App;
