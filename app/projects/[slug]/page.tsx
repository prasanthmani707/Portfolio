'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Mermaid from '../../components/Mermaid';
import Link from 'next/link';
import { p } from 'framer-motion/client';

export default function ProjectDetail() {
    const { slug } = useParams();
    const router = useRouter();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/projects" className="text-blue-400 hover:underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-4 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => router.back()}
                className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
            >
                <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </motion.button>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        {project.title}
                    </h1>
                    <div className="flex space-x-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-white/5"
                        >
                            <Github className="h-5 w-5" />
                            GitHub
                        </a>
                        
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-white">Description</h2>
                            <div className="space-y-6">
                                {project.detailedDescription.map((para, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-300 text-lg leading-relaxed"
                                    >
                                        {para}
                                    </p>    
                                ))}
                            </div>
                        </section>
                        <section className="mb-12">
                            <h2 className='text-2xl font-bold mb-4 text-white'>Objective</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                {project.objective.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>
                        <section className="mb-12">
                            <h2 className='text-2xl font-bold mb-4 text-white'>Scope of the Project</h2>
                            <p className='text-gray-300 text-lg leading-relaxed whitespace-pre-wrap'>{project.scope}</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                <div className="w-1 h-8 bg-blue-500 rounded-full" />
                                System Architecture
                            </h2>
                            <div className="relative group p-1 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500 shadow-2xl">
                                <div className="bg-gray-900/90 backdrop-blur-xl rounded-[22px] overflow-hidden border border-white/10">
                                    <Mermaid chart={project.architecture} />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <section className="bg-gray-900/50 p-6 rounded-2xl border border-white/10 sticky top-24">
                            <h2 className="text-xl font-bold mb-6 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/20 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
