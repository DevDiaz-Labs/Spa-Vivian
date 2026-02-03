import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Logo from './assets/logo-spa-vivian.webp'
import Masaje from './assets/masaje.webp';
import Descontractura from './assets/descontracturante.webp';
import Reductor from './assets/reductor.webp';
import Facial from './assets/facial.webp';
import Camillas from './assets/galeria-camillas.webp';
import Cabina from './assets/galeria-cabina.webp';
import Detalle from './assets/galeria-detalle.webp';
import { Menu, X, MapPin, Phone, Instagram, ArrowRight, Minus, MessageCircle, Facebook, Sparkles, Zap, Flower, ShieldCheck, Bed } from 'lucide-react'

const THEME = {
  colors: {
    bg: '#fff0f5', // Soft Blush
    richBlack: '#0a0a0a', // Deep Rich Black
    gold: '#D4AF37',
    goldGradient: 'linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)', // Metallic Gold
    footerBg: '#0a0a0a',
  },
  fonts: {
    serif: '"Playfair Display", serif', // Luxury Serif
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
  <div className="w-full h-[1px] bg-[#121212]/10 my-8" />
);

const Button = ({ children, variant = 'outline', className = '', onClick }) => {
  const base = "px-10 py-4 uppercase tracking-[0.2em] text-xs font-sans font-medium transition-all duration-700 relative overflow-hidden group";
  const styles = {
    outline: "border border-[#D4AF37] text-[#121212] hover:text-white",
    solid: "bg-[#D4AF37] text-white border border-[#D4AF37]",
    ghost: "text-[#121212] border-b border-[#121212]/20 hover:border-[#D4AF37] px-0 py-2 hover:pl-4"
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Filosofía', href: '#filosofía' },
    { name: 'Rituales', href: '#rituales' },
    { name: 'Ubicación', href: '#ubicación' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled
          ? 'py-4 bg-rich-black/80 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg'
          : 'py-8 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <motion.img
              src={Logo}
              alt="SPA VIVIAN"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -10 }}
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-xs uppercase tracking-[0.2em] font-sans font-medium text-white/90 hover:text-[#D4AF37] transition-colors duration-300"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <button
              onClick={() => window.open(SOCIAL.whatsapp, '_blank')}
              className={`px-8 py-2.5 border text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 ${scrolled
                ? 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121212]'
                : 'border-white/80 text-white hover:bg-white hover:text-[#121212]'
                }`}
            >
              Reservar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-[#D4AF37] hover:rotate-90 transition-transform duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} color="white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#121212]/95 backdrop-blur-xl z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl text-white/90 hover:text-[#D4AF37] transition-colors duration-300 italic"
                >
                  {item.name}
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
  const { scrollY } = useScroll();
  const yBackend = useTransform(scrollY, [0, 800], [0, 300]); // Parallax effect
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-rich-black">
      {/* Background Parallax */}
      <motion.div style={{ y: yBackend, opacity }} className="absolute inset-0 z-0">
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/50 to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Spa Atmosphere"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Ease-out-quintish
          className="flex flex-col items-center gap-8 max-w-4xl"
        >


          {/* Logo / Main Title */}
          <motion.img
            src={Logo}
            alt="SPA VIVIAN"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-72 md:w-96 lg:w-[30rem] object-contain drop-shadow-2xl"
          />

          {/* Slogan */}
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white/90 italic font-light tracking-wide leading-relaxed">
            "El sutil arte de la <span className="text-gold-luxury font-medium">relajación absoluta</span>"
          </h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-10"
          >
            <button
              onClick={() => document.getElementById('rituales').scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 overflow-hidden border border-[#D4AF37]/40 text-white font-sans text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:border-[#D4AF37]"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#121212] font-semibold">
                Explorar Rituales
              </span>
              <div className="absolute inset-0 bg-gold-gradient transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
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
      <div className={`w-full md:w-1/2 bg-soft-blush bg-noise flex flex-col justify-center p-12 md:p-24 lg:p-32 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <span className="text-gold-luxury text-sm tracking-[0.3em] font-sans mb-6 font-bold">0{index + 1}</span>
        <h3 className="font-serif text-4xl md:text-5xl text-rich-black mb-8 leading-tight">
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
    <section id="rituales" className="bg-soft-blush bg-noise">
      <div className="py-32 container mx-auto px-6 text-center">
        <span className="text-gold-luxury text-xs tracking-[0.4em] uppercase block mb-6 font-bold">
          Menú de Servicios
        </span>
        <h2 className="font-serif text-5xl md:text-6xl text-rich-black">
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

const InstallationsFeature = () => {
  return (
    <section className="relative overflow-hidden bg-rich-black py-24 md:py-32">
      {/* Background with blur (optional luxury touch) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-soft-blush rounded-full blur-[100px] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Column 1: Asymmetrical Collage */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            {/* Main Image */}
            <div className="relative z-20 w-3/4 aspect-[4/5] shadow-2xl border-4 border-white/90 -rotate-2 transform transition-transform duration-700 hover:rotate-0 hover:scale-105">
              <img
                src={Camillas}
                alt="Cabina de Masajes"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Image 1 (Top Right) */}
            <div className="absolute top-0 right-0 z-10 w-5/12 aspect-square shadow-xl border-4 border-white/90 rotate-3 transform translate-y-8 translate-x-4">
              <img
                src={Detalle}
                alt="Detalles"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Image 2 (Bottom Left) */}
            <div className="absolute bottom-8 left-0 z-30 w-5/12 aspect-video shadow-xl border-4 border-white/90 rotate-1 transform -translate-x-4">
              <img
                src={Cabina}
                alt="Ambiente Relax"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2: Content */}
          <div className="text-left space-y-8">
            <div>
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] font-sans font-bold uppercase mb-4 block">
                Conoce nuestras instalaciones
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Sumérgete en un espacio diseñado para tu bienestar
              </h2>
            </div>

            <p className="font-sans text-gray-300 leading-relaxed font-light text-sm md:text-base">
              En Spa Vivian encontrarás ambientes modernos, confortables y equipados con tecnología de última generación. Cada rincón ha sido pensado para aislarte del ruido exterior y envolverte en una atmósfera de paz absoluta.
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-4 border-t border-white/10">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-white/10 rounded-full text-[#D4AF37]">
                  <Bed size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">Cabinas Privadas</h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">Confort acústico y térmico</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-white/10 rounded-full text-[#D4AF37]">
                  <Zap size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">Aparatología</h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">Tecnología de vanguardia</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-white/10 rounded-full text-[#D4AF37]">
                  <Flower size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">Aromaterapia</h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">Esencias orgánicas</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-white/10 rounded-full text-[#D4AF37]">
                  <ShieldCheck size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">Certificación</h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">Higiene y seguridad</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button variant="outline" onClick={() => window.open(SOCIAL.whatsapp, '_blank')}>
                Reservar Visita
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="ubicación" className="bg-rich-black text-soft-blush py-24 border-t border-[#D4AF37]/30">
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
    <div className="min-h-screen bg-soft-blush selection:bg-rich-black selection:text-[#D4AF37]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@200;300;400;500&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <InstallationsFeature />
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
