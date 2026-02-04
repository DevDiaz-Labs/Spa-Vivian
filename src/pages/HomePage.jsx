import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Installations from '../components/Installations';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { SOCIAL } from '../data/constants';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Installations />
            </main>
            <Footer />
            <motion.a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="fixed bottom-8 right-8 z-50 mix-blend-difference text-white"
            >
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-500 cursor-pointer backdrop-blur-sm">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
            </motion.a>
        </>
    );
};

export default HomePage;
