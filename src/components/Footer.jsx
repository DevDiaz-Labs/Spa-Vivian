import React from 'react';
import { Facebook, Instagram, MapPin } from 'lucide-react';
import { SOCIAL } from '../data/constants';

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
                                    <p className="font-sans text-white/80 font-light text-sm leading-loose">
                                        Olcuautitlan, Cantera Puente de Piedra, Iztapalapa
                                    </p>
                                    <p className="font-sans text-white/60 font-light text-sm leading-loose">
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
                                <div className="font-sans text-white/60 font-light text-sm leading-loose space-y-1">
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

export default Footer;
