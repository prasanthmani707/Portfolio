'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";
import Footer from "./Footer";
import RunningManLoader from "./RunningManLoader";
import BackgroundAnimation from "./BackgroundAnimation";
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // Simulate loading time for the splash screen
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds loader

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
                    >
                        <RunningManLoader />
                    </motion.div>
                )}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <BackgroundAnimation />
                    <Navbar />
                    <main className="flex-grow pt-16 relative z-10">
                        {children}
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
}
