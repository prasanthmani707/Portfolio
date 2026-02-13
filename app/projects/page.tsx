'use client';

import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <div className="-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center overflow-x-hidden">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-4xl font-bold mb-4 text-gradient">My Projects</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore my work through this interactive gallery. Swipe or click to navigate.
                </p>
            </motion.div>

            <ProjectCarousel projects={projects} />
        </div>
    );
}
