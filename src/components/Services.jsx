import React from 'react';
import { Link } from 'react-router-dom';
import { FEATURED_SERVICES, SOCIAL } from '../data/constants';

const ServiceItem = ({ service, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="flex flex-col md:flex-row items-center py-12 md:py-24 w-full max-w-7xl mx-auto">
            {/* Image Section - Arch Shape */}
            <div className={`w-full md:w-1/2 relative px-6 md:px-12 ${isEven ? 'md:order-1' : 'md:order-2'} flex justify-center`}>
                <div className="relative w-[90%] md:w-full max-w-sm aspect-[3/4]">
                    {/* Gold Glow Behind */}
                    <div className="absolute inset-4 bg-gold/20 blur-3xl rounded-none -z-10" />

                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-none shadow-2xl z-10"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>

            {/* Text Section - Overlapping */}
            <div
                className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-0 py-12 md:py-0 relative z-20 
        ${isEven ? 'md:order-2 md:-ml-16' : 'md:order-1 md:-mr-16 text-right items-end'}`}
            >
                <div className={`bg-soft-blush/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/50 shadow-xl max-w-lg ${isEven ? 'text-left' : 'text-right'}`}>
                    <span className="text-gold-luxury text-sm tracking-[0.3em] font-sans mb-4 font-bold block">0{index + 1}</span>
                    <h3 className="font-serif text-3xl md:text-5xl text-rich-black mb-6 leading-tight">
                        {service.title}
                    </h3>
                    <p className="font-sans text-gray-600 leading-loose mb-8 text-sm md:text-base">
                        {service.description}
                    </p>
                    <button
                        onClick={() => window.open(SOCIAL.whatsapp, '_blank')}
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
        <section id="rituales" className="relative z-30 bg-soft-blush bg-noise pb-12 md:pb-32">
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
                    className="px-12 py-5 border border-gold text-gold hover:bg-gold hover:text-rich-black transition-all duration-500 font-sans tracking-[0.25em] text-xs uppercase font-medium"
                >
                    Explorar todos los servicios
                </Link>
            </div>
        </section>
    );
};

export default Services;
