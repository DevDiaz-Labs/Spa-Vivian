import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo-spa-vivian.webp';
import { SOCIAL } from '../data/constants';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Filosofía', href: '/#filosofía', isHash: true },
        { name: 'Rituales', href: '/rituales', isHash: false },
        { name: 'Ubicación', href: '/#ubicación', isHash: true },
    ];

    const handleLinkClick = (href, isHash) => {
        setMenuOpen(false);
        // If it's a hash link and we are on home, scroll to it
        if (isHash && isHome) {
            const elementId = href.split('#')[1];
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };


    return (
        <>
            <nav
                style={{ willChange: 'transform' }}
                className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? 'py-4 bg-rich-black/80 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg'
                    : 'py-8 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link to="/">
                            <motion.img
                                src={Logo}
                                alt="SPA VIVIAN"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -10 }}
                                className="h-10 w-auto object-contain cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((item) => (
                            item.isHash ? (
                                isHome ? (
                                    <a
                                        key={item.name}
                                        href={item.href.replace('/', '')} // Remove leading slash for local anchor
                                        className="group relative text-xs uppercase tracking-[0.2em] font-sans font-medium text-white/90 hover:text-[#D4AF37] transition-colors duration-300"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="group relative text-xs uppercase tracking-[0.2em] font-sans font-medium text-white/90 hover:text-[#D4AF37] transition-colors duration-300"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                )
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="group relative text-xs uppercase tracking-[0.2em] font-sans font-medium text-white/90 hover:text-[#D4AF37] transition-colors duration-300"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                                </Link>
                            )
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
                                item.isHash ? (
                                    (isHome) ? (
                                        <a
                                            key={item.name}
                                            href={item.href.replace('/', '')}
                                            onClick={() => setMenuOpen(false)}
                                            className="font-serif text-4xl text-white/90 hover:text-[#D4AF37] transition-colors duration-300 italic"
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="font-serif text-4xl text-white/90 hover:text-[#D4AF37] transition-colors duration-300 italic"
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="font-serif text-4xl text-white/90 hover:text-[#D4AF37] transition-colors duration-300 italic"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
