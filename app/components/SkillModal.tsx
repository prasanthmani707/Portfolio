'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Skill {
    name: string;
    icon: any;
    description: string;
    details: string[]; // Added precise details
    relatedIcons: (React.ElementType | string)[]; // Support both icon components and image paths
}

interface SkillModalProps {
    skill: Skill | null;
    onClose: () => void;
}

export default function SkillModal({ skill, onClose }: SkillModalProps) {
    return (
        <AnimatePresence>
            {skill && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 md:p-8 max-w-4xl w-full shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-8"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 z-10"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Left Column: Details */}
                            <div className="flex-1">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-blue-500/10 rounded-xl mr-4 border border-blue-500/20">
                                        <skill.icon className="h-8 w-8 text-blue-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{skill.name}</h2>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {skill.description}
                                </p>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Competencies</h3>
                                    <ul className="space-y-2">
                                        {skill.details.map((detail, index) => (
                                            <li key={index} className="flex items-center text-gray-300">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column: Icon Carousel */}
                            <div className="flex-2 flex flex-col items-center justify-center bg-white/5 rounded-xl border border-white/10 p-8 relative overflow-hidden min-h-[300px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 relative z-10">Related Technologies</h3>

                                <div className="relative z-10 w-full h-40 flex items-center justify-center overflow-visible">
                                    {skill.relatedIcons.map((iconOrPath, index) => {
                                        const isImagePath = typeof iconOrPath === 'string';
                                        const totalItems = skill.relatedIcons.length;

                                        // Initial positions for Left, Center, Right
                                        const positions = [-180, 0, 180];
                                        const scales = [0.7, 1.3, 0.7];

                                        // Adjusted Carousel: Slower, more spaced out one-way loop
                                        const totalDuration = 15; // Slower movement for better visibility
                                        const delay = (index / totalItems) * totalDuration;

                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ x: -400, opacity: 0, scale: 0.6 }}
                                                animate={{
                                                    x: [-400, -200, 0, 200, 400],
                                                    opacity: [0, 1, 1, 1, 0],
                                                    scale: [0.6, 0.8, 1.3, 0.8, 0.6]
                                                }}
                                                transition={{
                                                    duration: totalDuration,
                                                    repeat: Infinity,
                                                    delay: delay - totalDuration,
                                                    times: [0, 0.25, 0.5, 0.75, 1], // Constant velocity over a wider range
                                                    ease: "linear"
                                                }}
                                                // Center item (x close to 0) should be on top
                                                style={{ zIndex: 10 }}
                                                className="absolute p-6 bg-white  rounded-full border border-blue-500/30 "
                                            >
                                                {isImagePath ? (
                                                    <img
                                                        src={iconOrPath}
                                                        alt={`Related technology ${index + 1}`}
                                                        className="h-12 w-12 object-contain"
                                                    />
                                                ) : (
                                                    (() => {
                                                        const Icon = iconOrPath as React.ElementType;
                                                        return <Icon className="h-16 w-16 text-blue-400" />;
                                                    })()
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
