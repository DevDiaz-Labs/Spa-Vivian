import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const yBackend = useTransform(scrollY, [0, 800], [0, 300]); // Parallax effect
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <section id="inicio" className="relative min-h-[80vh] md:h-screen w-full overflow-hidden bg-rich-black">
            {/* Background Parallax */}
            <motion.div style={{ y: yBackend, opacity }} className="absolute inset-0 z-0 will-change-transform">
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Spa Atmosphere"
                    className="w-full h-full object-cover object-[75%_center] md:object-center"
                    loading="eager"
                    decoding="async"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 pt-32 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Ease-out-quintish
                    className="flex flex-col items-center max-w-5xl"
                >

                    {/* Typography Composition */}
                    <div className="flex flex-col items-center mb-10">
                        {/* Eyebrow */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="text-[#D4AF37] text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-medium mb-4"
                        >
                            Bienvenido a Spa Vivian
                        </motion.span>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1.2 }}
                            className="font-serif text-3xl md:text-6xl lg:text-7xl text-stone-100 italic font-light tracking-wide leading-tight drop-shadow-lg"
                        >
                            El sutil arte de la <br className="hidden md:block" /> relajación absoluta
                        </motion.h1>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <button
                            onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-12 py-4 overflow-hidden border border-white/40 text-white font-sans text-xs uppercase tracking-[0.25em] transition-all duration-500 hover:border-white hover:bg-white hover:text-rich-black"
                        >
                            <span className="relative z-10 font-medium">
                                Ver Servicios
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
            </div >

            {/* Scroll Indicator */}
            < motion.div
                animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
            </motion.div >
        </section >
    );
};

export default Hero;
