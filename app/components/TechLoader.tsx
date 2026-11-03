'use client';

import { motion } from 'framer-motion';
import { Cloud, Cpu } from 'lucide-react';

export default function TechLoader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[40vh] p-8 text-center bg-white">
            {/* Pulsing Cloud Icon with Rotating Tech Ring */}
            <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                {/* Outer Rotating Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 border-r-cyan-500"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Inner Counter-Rotating Ring */}
                <motion.div
                    className="absolute inset-2 rounded-full border border-transparent border-b-indigo-500 border-l-purple-500 opacity-60"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Center Glowing Icon */}
                <motion.div
                    className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-50 to-indigo-50 border border-blue-200/80 flex items-center justify-center shadow-sm"
                    animate={{ scale: [0.95, 1.05, 0.95] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Cloud className="h-6 w-6 text-blue-600" />
                </motion.div>
            </div>

            {/* Title / Status */}
            <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1 flex items-center gap-2">
                <span>Prasanth.dev</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </h3>

            <p className="text-xs font-mono text-slate-500 mb-4">
                Deploying cloud interface...
            </p>

            {/* Smooth Micro Progress Bar */}
            <div className="w-40 h-1 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full"
                    animate={{
                        x: ['-100%', '100%']
                    }}
                    transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
}
