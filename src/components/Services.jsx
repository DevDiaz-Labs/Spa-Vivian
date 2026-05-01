import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FEATURED_SERVICES, SOCIAL } from '../data/constants';

import Watermark from './Watermark';

const ServiceItem = ({ service, index }) => {
    const isEven = index % 2 === 0;
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col md:flex-row items-center py-12 md:py-24 w-full max-w-7xl mx-auto">
            {/* Image Section - Arch Shape */}
            <div className={`w-full md:w-1/2 relative px-6 md:px-12 ${isEven ? 'md:order-1' : 'md:order-2'} flex justify-center`}>
                <div className="relative w-[90%] md:w-full max-w-sm aspect-[3/4] overflow-hidden group">
                    {/* Gold Glow Behind */}
                    <div className="absolute inset-4 bg-gold/20 blur-3xl rounded-none -z-10" />

                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-none shadow-2xl z-10 transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                    />
                    <Watermark className="absolute top-6 right-6 w-16 md:w-24 opacity-60 pointer-events-none z-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" />
                </div>
            </div>

            {/* Text Section - Overlapping */}
            <div
                className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-0 py-12 md:py-0 relative z-20 
        ${isEven ? 'md:order-2 md:-ml-16' : 'md:order-1 md:-mr-16 text-right items-end'}`}
            >
                <div className={`bg-soft-blush/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/50 shadow-xl max-w-lg ${isEven ? 'text-left' : 'text-right'}`}>
                    <span className="text-gold-luxury text-sm tracking-[0.3em] font-sans mb-4 font-bold block">0{index + 1}</span>
                    <h3 className="font-serif text-3xl md:text-5xl text-rich-black mb-2 leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-gold font-sans font-bold mb-6 italic text-xl">${(service.price || 0).toLocaleString()} MXN</p>
                    <p className="font-sans text-gray-600 leading-loose mb-8 text-sm md:text-base">
                        {service.description}
                    </p>
                    <button
                        onClick={() => addToCart({
                            id: service.id,
                            title: service.title,
                            image: service.image,
                            price: service.price
                        })}
                        className="text-gold uppercase text-xs tracking-[0.2em] border-b border-gold pb-1 hover:text-rich-black hover:border-rich-black transition-colors duration-300"
                    >
                        Reservar Experiencia
                    </button>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section id="servicios" className="relative z-30 bg-soft-blush bg-noise pb-12 md:pb-32">
            <div className="pt-16 pb-8 md:pt-32 md:pb-16 container mx-auto px-6 text-center">
                <span className="text-gold-luxury text-xs tracking-[0.4em] uppercase block mb-6 font-bold">
                    Menú de Servicios
                </span>
                <h2 className="font-serif text-5xl md:text-6xl text-rich-black">
                    Colección Destacada
                </h2>
            </div>

            <div className="flex flex-col gap-12">
                {FEATURED_SERVICES.map((service, index) => (
                    <ServiceItem key={service.id} service={service} index={index} />
                ))}
            </div>

            <div className="mt-24 flex justify-center">
                <Link
                    to="/rituales"
                    className="px-8 md:px-12 py-5 border border-gold text-gold hover:bg-gold hover:text-rich-black transition-all duration-500 font-sans tracking-[0.2em] md:tracking-[0.25em] text-[10px] md:text-xs uppercase font-medium text-center"
                >
                    Explorar todos los servicios
                </Link>
            </div>
        </section>
    );
};

export default Services;
