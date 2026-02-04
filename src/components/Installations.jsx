import React from 'react';
import { Bed, Zap, Flower, ShieldCheck } from 'lucide-react';
import { Button } from './UI';
import { SOCIAL } from '../data/constants';
import Camillas from '../assets/galeria-camillas.webp';
import Cabina from '../assets/galeria-cabina.webp';
import Detalle from '../assets/galeria-detalle.webp';

const Installations = () => {
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

                        <p className="font-sans text-gray-300 leading-loose font-light text-sm md:text-base">
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

export default Installations;
