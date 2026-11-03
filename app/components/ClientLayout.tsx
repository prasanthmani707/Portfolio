'use client';

import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import TechLoader from "./TechLoader";
import BackgroundAnimation from "./BackgroundAnimation";
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('portfolio_booted');
        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('portfolio_booted', 'true');
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative bg-white selection:bg-blue-600/15 selection:text-blue-900">
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
                    >
                        <TechLoader />
                    </motion.div>
                )}
            </AnimatePresence>

            <BackgroundAnimation />
            <Navbar />
            <main className="flex-grow pt-20 relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}
