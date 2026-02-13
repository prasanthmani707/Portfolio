'use client';

import { motion } from 'framer-motion';

export default function RunningManLoader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="relative w-24 h-24">
                {/* Head */}
                <motion.div
                    className="absolute top-0 right-8 w-5 h-5 bg-blue-500 rounded-full"
                    animate={{
                        y: [0, 2, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Body */}
                <motion.div
                    className="absolute top-5 right-10 w-1 h-10 bg-white origin-top"
                    animate={{
                        rotate: [10, 15, 10],
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Arms */}
                    <motion.div
                        className="absolute top-2 left-0 w-8 h-1 bg-white origin-left"
                        animate={{
                            rotate: [45, -45, 45],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute top-2 left-0 w-8 h-1 bg-white origin-left"
                        animate={{
                            rotate: [-45, 45, -45],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Legs */}
                {/* Leg 1 */}
                <motion.div
                    className="absolute top-14 right-10 w-1 h-8 bg-white origin-top"
                    animate={{
                        rotate: [30, -30, 30]
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <motion.div
                        className="absolute bottom-0 right-0 w-1 h-8 bg-white origin-top"
                        animate={{
                            rotate: [-30, 10, -30]
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Leg 2 */}
                <motion.div
                    className="absolute top-14 right-10 w-1 h-8 bg-white origin-top"
                    animate={{
                        rotate: [-30, 30, -30]
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <motion.div
                        className="absolute bottom-0 right-0 w-1 h-8 bg-white origin-top"
                        animate={{
                            rotate: [10, -30, 10]
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>

            <motion.p
                className="mt-8 text-blue-400 font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                Loading...
            </motion.p>
        </div>
    );
}
