import React from 'react';
import { Heart, Home, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from './UI';
import { SOCIAL } from '../data/constants';
import Camillas from '../assets/galeria-camillas.webp';
import Cabina from '../assets/galeria-cabina.webp';
import Detalle from '../assets/galeria-detalle.webp';

const Installations = () => {
    return (
        <section id="instalaciones" className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1C1917] to-black py-12 md:py-32">

            {/* Golden Glow Effect */}
            <div className="absolute top-1/2 left-0 lg:left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Column 1: Polaroid Premium Collage */}
                    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">

                        {/* Back Left: Detalle */}
                        <div className="absolute left-4 lg:left-12 top-10 z-0 w-[55%] aspect-[4/5] bg-white p-2 shadow-2xl rounded-sm transform scale-90 -rotate-[8deg] opacity-90 transition-transform duration-700 hover:z-30 hover:scale-100 hover:rotate-0">
                            <img
                                src={Detalle}
                                alt="Detalle Spa"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Back Right: Cabina */}
                        <div className="absolute right-4 lg:right-12 top-8 z-0 w-[55%] aspect-[4/5] bg-white p-2 shadow-2xl rounded-sm transform scale-90 rotate-[6deg] opacity-90 transition-transform duration-700 hover:z-30 hover:scale-100 hover:rotate-0">
                            <img
                                src={Cabina}
                                alt="Cabina Spa"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Main Center: Camillas */}
                        <div className="relative z-20 w-[60%] aspect-[4/5] bg-white p-2 shadow-2xl rounded-sm transform -rotate-[2deg] transition-transform duration-700 hover:scale-105 hover:rotate-0">
                            <img
                                src={Camillas}
                                alt="Camillas Spa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Column 2: Content */}
                    <div className="text-left space-y-10">
                        <div>
                            <span className="text-[#D4AF37] text-xs tracking-[0.3em] font-sans font-bold uppercase mb-4 block">
                                TU REFUGIO PERSONAL
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                                En Spa Vivian, creemos que el verdadero lujo reside en la calidez.
                            </h2>
                        </div>

                        <p className="font-sans text-gray-300 leading-loose font-light text-sm md:text-base">
                            Hemos diseñado un espacio íntimo donde la luz suave y la calma te invitan a soltar la carga del día. Un rincón dedicado exclusivamente a tu cuidado y descanso.
                        </p>

                        {/* Benefits Icons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6 pt-6 border-t border-white/10">

                            {/* 1. Atención Dedicada */}
                            <div className="flex gap-4 items-start group">
                                <div className="p-2 bg-white/5 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                                    <Heart size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-lg">Atención Dedicada</h4>
                                    <p className="text-xs text-gray-400 font-sans mt-1">Cuidado humano y personalizado.</p>
                                </div>
                            </div>

                            {/* 2. Ambiente Íntimo */}
                            <div className="flex gap-4 items-start group">
                                <div className="p-2 bg-white/5 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                                    <Home size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-lg">Ambiente Íntimo</h4>
                                    <p className="text-xs text-gray-400 font-sans mt-1">Diseñado para tu comodidad total.</p>
                                </div>
                            </div>

                            {/* 3. Productos Selectos */}
                            <div className="flex gap-4 items-start group">
                                <div className="p-2 bg-white/5 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                                    <Sparkles size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-lg">Productos Selectos</h4>
                                    <p className="text-xs text-gray-400 font-sans mt-1">Calidad premium en cada ritual.</p>
                                </div>
                            </div>

                            {/* 4. Cuidado Profesional */}
                            <div className="flex gap-4 items-start group">
                                <div className="p-2 bg-white/5 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                                    <ShieldCheck size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-lg">Cuidado Profesional</h4>
                                    <p className="text-xs text-gray-400 font-sans mt-1">Tu seguridad y paz son lo primero.</p>
                                </div>
                            </div>

                        </div>

                        <div className="pt-6">
                            <Button variant="outline" onClick={() => window.open(SOCIAL.whatsapp, '_blank')} className="text-[#D4AF37] hover:text-[#121212]">
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
