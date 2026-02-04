import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../assets/logo-spa-vivian.webp';

const Hero = () => {
    const { scrollY } = useScroll();
    const yBackend = useTransform(scrollY, [0, 800], [0, 300]); // Parallax effect
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-rich-black">
            {/* Background Parallax */}
            <motion.div style={{ y: yBackend, opacity }} className="absolute inset-0 z-0 will-change-transform">
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-rich-black/50 to-black/30 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Spa Atmosphere"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 pb-20">
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
                    <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white/90 italic font-light tracking-normal leading-relaxed">
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

export default Hero;
