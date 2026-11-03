'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, GalleryHorizontal, Github, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import ProjectCarousel from './ProjectCarousel';
import { projects } from '../data/projects';

type CategoryFilter = 'All' | 'Cloud & AWS' | 'DevOps & IaC' | 'Automation & Python';

export default function Projects() {
    const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
    const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

    const filteredProjects = projects.filter((project) => {
        if (selectedCategory === 'All') return true;
        return project.category === selectedCategory;
    });

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Real-World Implementations</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    Cloud & DevOps <span className="text-gradient">Projects</span>
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    Production-ready cloud architectures, automated IaC deployments, and event-driven backends built with AWS, Terraform, Ansible, and Python.
                </p>
            </motion.div>

            {/* Controls Bar: Category Filters & View Toggle */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
                {/* Category Filters */}
                <div className="flex flex-wrap items-center gap-2">
                    {(['All', 'Cloud & AWS', 'DevOps & IaC', 'Automation & Python'] as CategoryFilter[]).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* View Switcher: Grid vs Carousel */}
                <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                            viewMode === 'grid'
                                ? 'bg-white text-blue-600 font-bold shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        <LayoutGrid className="h-4 w-4" />
                        <span>Grid</span>
                    </button>
                    <button
                        onClick={() => setViewMode('carousel')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                            viewMode === 'carousel'
                                ? 'bg-white text-blue-600 font-bold shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        <GalleryHorizontal className="h-4 w-4" />
                        <span>3D Showcase</span>
                    </button>
                </div>
            </div>

            {/* View Content */}
            <AnimatePresence mode="wait">
                {viewMode === 'carousel' ? (
                    <motion.div
                        key="carousel"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ProjectCarousel projects={filteredProjects} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 rounded-2xl p-7 flex flex-col justify-between group transition-all duration-300"
                            >
                                <div>
                                    {/* Card Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                            {project.badge || 'Project'}
                                        </span>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                                            aria-label="GitHub Repository"
                                        >
                                            <Github className="h-4 w-4" />
                                        </a>
                                    </div>

                                    {/* Title */}
                                    <Link href={`/projects/${project.slug}`}>
                                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                                            {project.displayTitle || project.title}
                                        </h2>
                                    </Link>

                                    {/* Description */}
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Objectives Snippet */}
                                    <div className="mb-6 space-y-2">
                                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                                            Key Objectives
                                        </h4>
                                        <ul className="space-y-1.5">
                                            {project.objective.slice(0, 3).map((obj, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                                                    <span className="line-clamp-2">{obj}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Link */}
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 hover:border-blue-600 transition-all text-sm font-semibold group/btn shadow-sm"
                                    >
                                        <span>Architecture & Case Study</span>
                                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
