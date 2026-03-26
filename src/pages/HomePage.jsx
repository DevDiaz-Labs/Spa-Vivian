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

        </>
    );
};

export default HomePage;
