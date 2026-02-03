import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './assets/logo-spa-vivian.webp'
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
    description: "Una coreografía lenta de movimientos fluidos diseñada para silenciar el ruido mental y devolver la armonía al cuerpo.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200",
    duration: "60 / 90 min"
  },
  {
    id: "02",
    title: "Deep Tissue & Release",
    description: "Terapia estructural profunda. Liberamos la tensión acumulada en las capas musculares más profundas con precisión quirúrgica.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200",
    duration: "60 min"
  },
  {
    id: "03",
    title: "Escultura Corporal",
    description: "Maderoterapia y drenaje linfático manual. Un ritual reductivo que redefine la silueta respetando la anatomía natural.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200",
    duration: "90 min"
  },
  {
    id: "04",
    title: "Facial Alta Costura",
    description: "Hidratación profunda y luminosidad instantánea utilizando principios activos botánicos de la más alta pureza.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200",
    duration: "75 min"
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
            className="mx-auto w-48 md:w-72 z-30 object-contain drop-shadow-lg"
          />

          <p className="font-serif text-xl md:text-3xl text-white/80 italic font-light tracking-wide mt-6">
            "El sutil arte de la relajación absoluta"
          </p>

          <div className="pt-12">
            <button
              onClick={() => document.getElementById('rituales').scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center justify-center px-12 py-4 border-[1.5px] border-white/30 text-white overflow-hidden transition-all duration-700 hover:border-[#D4AF37]"
            >
              <span className="relative z-10 text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-500">
                Explorar Rituales
              </span>
              <div className="absolute inset-0 bg-[#D4AF37] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-0 opacity-80" />
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
      <div className={`w-full md:w-1/2 h-[60vh] md:h-auto overflow-hidden relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <span className="absolute top-8 right-8 text-9xl font-serif text-white/10 mix-blend-overlay">
          {service.id}
        </span>
      </div>

      <div className={`w-full md:w-1/2 bg-[#FFF0F5] flex flex-col justify-center p-12 md:p-24 lg:p-32 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Minus className="text-[#D4AF37]" size={40} strokeWidth={1} />
            <span className="font-sans text-xs tracking-[0.2em] text-[#1C1917]/60 uppercase">
              {service.duration}
            </span>
          </div>

          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1917] mb-8 leading-tight">
            {service.title}
          </h3>

          <p className="font-sans text-[#1C1917]/70 font-light leading-loose text-sm md:text-base tracking-wide mb-12 max-w-md">
            {service.description}
          </p>

          <Button
            variant="ghost"
            onClick={() => window.open(SOCIAL.whatsapp, '_blank')}
          >
            Reservar Experiencia <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
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
    <footer id="ubicación" className="bg-[#000000] text-[#FFF0F5] py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <div className="space-y-8">
            <h3 className="font-serif text-3xl tracking-widest text-[#D4AF37]">SPA VIVIAN</h3>
            <p className="font-sans text-white/40 font-light text-sm leading-relaxed max-w-xs">
              Un santuario urbano dedicado a la preservación de la juventud y el cultivo de la paz interior.
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 group transition-all duration-300">
                <MessageCircle size={24} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm text-gray-400 group-hover:text-[#D4AF37] tracking-wide">Envíanos un WhatsApp</span>
              </a>
              <a href="https://www.facebook.com/adyperezc/photos" target="_blank" rel="noreferrer" className="flex items-center gap-3 group transition-all duration-300">
                <Facebook size={24} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm text-gray-400 group-hover:text-[#D4AF37] tracking-wide">Síguenos en Facebook</span>
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 group transition-all duration-300">
                <Instagram size={24} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="font-sans text-sm text-gray-400 group-hover:text-[#D4AF37] tracking-wide">@spa_vivian</span>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#D4AF37]">Visítanos</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <MapPin className="text-white/20 mt-1 shrink-0" size={16} />
                <p className="font-sans text-white/60 font-light text-sm">
                  Av. Principal #123<br />Lomas de Chapultepec, CDMX
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-4 h-4 mt-1 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <div className="w-1 h-1 bg-[#D4AF37] rounded-full"></div>
                </div>
                <div className="font-sans text-white/60 font-light text-sm">
                  <p>Lun - Vie: 09:00 - 20:00</p>
                  <p>Sábados: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-64 w-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.364406026524!2d-99.1668786!3d19.3099955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzM2LjAiTiA5OcKwMTAnMDAuOCJX!5e0!3m2!1sen!2smx!4v1614000000000!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] tracking-widest uppercase text-white/20 font-sans">
          <p>© 2024 SPA VIVIAN. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
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
