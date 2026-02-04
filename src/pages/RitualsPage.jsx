import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FULL_MENU, CATEGORY_CONFIG, SOCIAL } from '../data/constants';

const RitualsPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeCategory, setActiveCategory] = useState(Object.keys(FULL_MENU)[0]);

    // Logic to detect active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.keys(FULL_MENU);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If element top is within the middle of the viewport
                    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                        setActiveCategory(section);
                        break;
                    }
                    // Or if element bottom is still visible and it's the last one
                    if (rect.bottom > window.innerHeight / 2 && rect.top < 0) {
                        setActiveCategory(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-soft-blush">
            <Navbar />

            {/* Split Screen Container */}
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* Desktop Left Column - Dynamic Image (Sticky) */}
                <div className="hidden lg:block lg:w-[45%] h-screen sticky top-0 overflow-hidden bg-rich-black">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay */}
                            <img
                                src={CATEGORY_CONFIG[activeCategory]?.image}
                                alt={CATEGORY_CONFIG[activeCategory]?.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Branding / Watermark logic could go here */}
                    <div className="absolute bottom-12 left-12 z-20">
                        <h2 className="text-white/80 font-serif text-3xl italic tracking-wider">
                            {CATEGORY_CONFIG[activeCategory]?.title}
                        </h2>
                        <div className="w-12 h-[1px] bg-[#D4AF37] mt-4" />
                    </div>
                </div>

                {/* Right Column - Scrollable Content */}
                <div className="w-full lg:w-[55%] pt-32 pb-24 px-6 md:px-16 lg:px-24 bg-soft-blush">

                    {/* Header / Back Button */}
                    <div className="mb-20">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-rich-black/60 hover:text-[#D4AF37] transition-colors duration-300 mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                            <span className="font-sans text-xs tracking-[0.2em] uppercase font-medium">Volver al Inicio</span>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase block mb-4 font-bold">
                                Nuestro Menú
                            </span>
                            <h1 className="font-serif text-4xl md:text-5xl text-rich-black leading-tight">
                                Rituales & <br /> Servicios
                            </h1>
                        </motion.div>
                    </div>

                    {/* Service Categories Logic */}
                    <div className="space-y-32">
                        {Object.entries(FULL_MENU).map(([key, services]) => {
                            const config = CATEGORY_CONFIG[key];
                            return (
                                <section key={key} id={key} className="scroll-mt-32">
                                    {/* Mobile Image (Visible only on small screens) */}
                                    <div className="lg:hidden mb-8 h-64 overflow-hidden rounded-sm relative">
                                        <div className="absolute inset-0 bg-black/20 z-10" />
                                        <img
                                            src={config.image}
                                            alt={config.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <h3 className="text-white font-serif text-2xl italic">{config.title}</h3>
                                        </div>
                                    </div>

                                    {/* Desktop Title (Hidden on mobile since image has it) */}
                                    <h3 className="hidden lg:block font-serif text-3xl text-rich-black mb-12 relative inline-block">
                                        {config.title}
                                        <span className="absolute -bottom-2 left-0 w-1/3 h-[2px] bg-[#D4AF37]" />
                                    </h3>

                                    {/* Editorial List */}
                                    <div className="space-y-0">
                                        {services.map((service, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => window.open(SOCIAL.whatsapp, '_blank')}
                                                className="group flex items-center justify-between py-5 border-b border-[#D4AF37]/30 transition-all duration-300 hover:pl-4 hover:border-[#D4AF37] cursor-pointer"
                                            >
                                                <span className="font-sans text-rich-black font-light tracking-wider text-sm md:text-base group-hover:text-[#D4AF37] transition-colors duration-300">
                                                    {service}
                                                </span>
                                                {/* RESERVAR button (Text) */}
                                                <button className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase font-medium">
                                                    Reservar
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>

                    {/* Footer for Right Column */}
                    <div className="mt-32 pt-12 border-t border-rich-black/10">
                        <p className="font-sans text-xs text-rich-black/50 text-center uppercase tracking-widest">
                            © 2026 Spa Vivian. Todos los derechos reservados.
                        </p>
                    </div>

                </div>
            </div>

            {/* Global Footer is hidden on this specific editorial layout or can be added below if requested. 
                Based on "Split Screen" usually Footer is either at the bottom of right col or global. 
                Let's keep the global Footer only if user scrolls to very bottom? 
                Actually, simpler to just have the custom footer in right col for this specific layout to maintain the "Side Image" feel.
            */}
        </div>
    );
};

export default RitualsPage;
