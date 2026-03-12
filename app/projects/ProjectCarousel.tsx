'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Project } from '../data/projects';


interface ProjectCarouselProps {
    projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length]);

    // Auto-play effect
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const handleDragEnd = (_: any, info: any, isActive: boolean) => {
        if (!isActive) return;

        // Stop auto-play on user interaction
        setIsAutoPlaying(false);

        const swipeThreshold = 50;
        if (info.offset.x > swipeThreshold) {
            prevSlide();
        } else if (info.offset.x < -swipeThreshold) {
            nextSlide();
        }
    };

    const getCardStyle = (index: number) => {
        const diff = (index - currentIndex + projects.length) % projects.length;

        // Normalize diff to handle wrap-around correctly for styling
        let normalizedDiff = diff;
        if (diff > projects.length / 2) {
            normalizedDiff = diff - projects.length;
        }

        // Active Card
        if (normalizedDiff === 0) {
            return {
                zIndex: 10,
                x: 0,
                scale: 1,
                opacity: 1,
                rotateY: 0,
            };
        }

        // Left Card
        if (normalizedDiff === -1 || (currentIndex === 0 && index === projects.length - 1)) {
            return {
                zIndex: 5,
                x: '-60%',
                scale: 0.8,
                opacity: 0.6,
                rotateY: 15,
            };
        }

        // Right Card
        if (normalizedDiff === 1 || (currentIndex === projects.length - 1 && index === 0)) {
            return {
                zIndex: 5,
                x: '60%',
                scale: 0.8,
                opacity: 0.6,
                rotateY: -15,
            };
        }

        // Hidden/Far Cards
        return {
            zIndex: 0,
            x: normalizedDiff < 0 ? '-120%' : '120%',
            scale: 0.5,
            opacity: 0,
            rotateY: 0,
        };
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-center perspective-1000">

            {/* Cards Container */}
            <div className="relative w-full h-full flex items-center justify-center perspective-1000 transform-style-3d">
                {projects.map((project, index) => {
                    const style = getCardStyle(index);
                    const isActive = index === currentIndex;

                    return (
                        <motion.div
                            key={index}
                            initial={false}
                            animate={style}
                            drag={isActive ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.15}
                            dragMomentum={false}
                            data-is-active={isActive}
                            onDragEnd={(e, info) => handleDragEnd(e, info, isActive)}
                            onPointerDownCapture={() => setIsAutoPlaying(false)}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 30,
                            }}
                            className={`absolute w-[90%] md:w-[60%] h-auto max-h-[450px] 
    bg-gray-900 border border-white/10 rounded-2xl p-8 shadow-2xl 
    flex flex-col justify-between backdrop-blur-xl will-change-transform
    ${isActive ? 'cursor-grab active:cursor-grabbing' : ''}`}
                            style={{
                                transformStyle: "preserve-3d",
                                perspective: 1000,
                                willChange: "transform, opacity",
                            }}
                        >

                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <Link href={`/projects/${project.slug}`}>
                                        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity cursor-pointer">
                                            {project.title}
                                        </h3>
                                    </Link>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                            onPointerDown={(e) => e.stopPropagation()}
                                        >
                                            <Github className="h-6 w-6" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group mb-4 w-fit"
                                >
                                    View Project Details
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex space-x-2">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
