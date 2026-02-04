import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FULL_MENU, CATEGORY_CONFIG } from '../data/constants';
import Masaje from '../assets/masaje.webp';

const RitualsPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-soft-blush">
            <Navbar />

            <main className="pt-32 pb-24">
                {/* Page Header */}
                <div className="container mx-auto px-6 mb-16 relative">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-rich-black/60 hover:text-gold-luxury transition-colors duration-300 mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="font-sans text-sm tracking-widest uppercase">Volver al Inicio</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold-luxury text-xs tracking-[0.4em] uppercase block mb-4 font-bold">
                            Nuestro Menú
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl text-rich-black">
                            Rituales & Servicios
                        </h1>
                    </motion.div>
                </div>

                {/* Catalog Content */}
                <div className="space-y-32">
                    {Object.entries(FULL_MENU).map(([key, services]) => {
                        const config = CATEGORY_CONFIG[key] || { title: key, image: Masaje };
                        return (
                            <div key={key} className="relative">
                                {/* Category Header */}
                                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-rich-black/40 z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <h3 className="font-serif text-4xl md:text-5xl text-white tracking-widest text-center px-4 drop-shadow-xl uppercase">
                                            <span className="text-gold-luxury">{config.title}</span>
                                        </h3>
                                    </div>
                                    <img
                                        src={config.image}
                                        alt={config.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Services Grid */}
                                <div className="container mx-auto px-6 pt-16">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                                        {services.map((service, idx) => (
                                            <div key={idx} className="group flex items-center gap-4 py-4 border-b border-rich-black/5 hover:border-gold/30 transition-colors duration-300">
                                                <span className="text-gold text-[10px] transform rotate-45">◆</span>
                                                <span className="font-sans text-rich-black font-light tracking-wide text-sm md:text-base group-hover:text-gold transition-colors duration-300 cursor-default">
                                                    {service}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>

            <Footer />

        </div>
    );
};

export default RitualsPage;
