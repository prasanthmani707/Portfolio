'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Project } from '../data/projects';

interface ProjectCarouselProps {
    projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length]);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const handleDragEnd = (_: any, info: any, isActive: boolean) => {
        if (!isActive) return;
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

        let normalizedDiff = diff;
        if (diff > projects.length / 2) {
            normalizedDiff = diff - projects.length;
        }

        // Active Center Card
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
                x: '-55%',
                scale: 0.85,
                opacity: 0.5,
                rotateY: 15,
            };
        }

        // Right Card
        if (normalizedDiff === 1 || (currentIndex === projects.length - 1 && index === 0)) {
            return {
                zIndex: 5,
                x: '55%',
                scale: 0.85,
                opacity: 0.5,
                rotateY: -15,
            };
        }

        return {
            zIndex: 0,
            x: normalizedDiff < 0 ? '-100%' : '100%',
            scale: 0.6,
            opacity: 0,
            rotateY: 0,
        };
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto py-8">
            {/* Top Carousel Controls & Counter */}
            <div className="flex items-center justify-between mb-6 px-4">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        {currentIndex + 1} of {projects.length}
                    </span>
                    <span className="text-xs text-slate-500 hidden sm:inline">
                        Use arrows or swipe to navigate
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all shadow-sm active:scale-95"
                        aria-label="Previous Project"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all shadow-sm active:scale-95"
                        aria-label="Next Project"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* 3D Cards Stage */}
            <div className="relative w-full h-[460px] flex items-center justify-center perspective-1000 overflow-visible">
                {projects.map((project, index) => {
                    const style = getCardStyle(index);
                    const isActive = index === currentIndex;

                    return (
                        <motion.div
                            key={project.slug}
                            initial={false}
                            animate={style}
                            drag={isActive ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.15}
                            dragMomentum={false}
                            onDragEnd={(e, info) => handleDragEnd(e, info, isActive)}
                            transition={{
                                type: "spring",
                                stiffness: 280,
                                damping: 28,
                            }}
                            className={`absolute w-[92%] md:w-[70%] max-w-2xl h-auto min-h-[380px] 
                            bg-white border rounded-3xl p-7 sm:p-9 shadow-xl 
                            flex flex-col justify-between will-change-transform
                            ${isActive ? 'cursor-grab active:cursor-grabbing border-blue-400 shadow-2xl shadow-blue-500/10' : 'border-slate-200/80 pointer-events-none'}`}
                            style={{
                                transformStyle: "preserve-3d",
                                perspective: 1000,
                            }}
                        >
                            <div>
                                <div className="flex justify-between items-start gap-4 mb-4">
                                    <div>
                                        <span className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                                            {project.badge || 'Cloud Project'}
                                        </span>
                                        <Link href={`/projects/${project.slug}`}>
                                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                                                {project.displayTitle || project.title}
                                            </h3>
                                        </Link>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors pointer-events-auto"
                                            title="GitHub Repo"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/25 pointer-events-auto"
                                >
                                    <span>Explore System Architecture</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Dots Indicator */}
            <div className="flex justify-center items-center space-x-2 mt-4">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                        }}
                        className={`h-2.5 rounded-full transition-all ${
                            index === currentIndex
                                ? 'bg-blue-600 w-8'
                                : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
