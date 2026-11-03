'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import {
    Github, ArrowLeft, ArrowRight, CheckCircle2,
    Layers, Cpu, Compass, Share2, Check, ExternalLink
} from 'lucide-react';
import Mermaid from '../../components/Mermaid';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectDetail() {
    const { slug } = useParams();
    const [copied, setCopied] = useState(false);

    const projectIndex = projects.findIndex((p) => p.slug === slug);
    const project = projects[projectIndex];

    if (!project) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-white">
                <h1 className="text-4xl font-bold mb-4 text-slate-900">Project Not Found</h1>
                <p className="text-slate-600 mb-6">The requested case study could not be located.</p>
                <Link
                    href="/projects"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                >
                    Back to All Projects
                </Link>
            </div>
        );
    }

    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    const handleCopy = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="min-h-screen pt-4 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
            {/* Breadcrumb & Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors shadow-sm"
                    >
                        {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
                        <span>{copied ? 'Link Copied!' : 'Share'}</span>
                    </button>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold transition-colors shadow-sm"
                    >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                        <ExternalLink className="h-3 w-3" />
                    </a>
                </div>
            </div>

            {/* Case Study Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 mb-12"
            >
                <div className="inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {project.badge || project.category || 'Cloud Engineering'}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                    {project.displayTitle || project.title}
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
                    {project.description}
                </p>
            </motion.div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left / Main Column */}
                <div className="lg:col-span-8 space-y-12">
                    
                    {/* System Architecture Section */}
                    <section className="bg-white border border-slate-200/90 shadow-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                                    <Layers className="h-5 w-5" />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">System Architecture</h2>
                                    <p className="text-xs text-slate-500 font-mono">Interactive Component Flow</p>
                                </div>
                            </div>
                        </div>

                        {/* Mermaid Diagram Box */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden p-2 sm:p-4 shadow-sm">
                            <Mermaid chart={project.architecture} />
                        </div>
                    </section>

                    {/* Detailed Overview */}
                    <section className="bg-white border border-slate-200/90 shadow-sm rounded-2xl p-6 sm:p-8 space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                                <Compass className="h-5 w-5" />
                            </div>
                            Detailed Overview & Solution
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                            {project.detailedDescription.map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>
                    </section>

                    {/* Engineering Objectives */}
                    <section className="bg-white border border-slate-200/90 shadow-sm rounded-2xl p-6 sm:p-8 space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-600">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            Core Engineering Objectives
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {project.objective.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Scope of the Project */}
                    <section className="bg-white border border-slate-200/90 shadow-sm rounded-2xl p-6 sm:p-8 space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Project Scope & Deliverables</h2>
                        <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
                            {project.scope}
                        </p>
                    </section>
                </div>

                {/* Right / Sidebar Column */}
                <div className="lg:col-span-4 space-y-8">
                    
                    {/* Tech Stack Widget */}
                    <div className="bg-white border border-slate-200/90 shadow-sm rounded-2xl p-6 sticky top-24 space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                                <Cpu className="h-5 w-5 text-blue-600" />
                                Tech Stack & Services
                            </h3>
                            <p className="text-xs text-slate-500">Tools utilized in this solution</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border border-slate-200 text-xs font-semibold transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-500">
                            <div className="flex justify-between">
                                <span className="text-slate-500">Repository</span>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline truncate max-w-[150px] font-medium"
                                >
                                    GitHub Link
                                </a>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Deployment</span>
                                <span className="text-slate-800 font-medium">Automated Pipeline</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Architecture</span>
                                <span className="text-slate-800 font-medium">Serverless / IaC</span>
                            </div>
                        </div>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
                        >
                            <Github className="h-4 w-4" />
                            <span>Inspect on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Next/Prev Pagination */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                {prevProject ? (
                    <Link
                        href={`/projects/${prevProject.slug}`}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-left transition-all w-full sm:w-auto shadow-sm"
                    >
                        <ArrowLeft className="h-5 w-5 text-slate-500" />
                        <div>
                            <span className="text-xs text-slate-500 block uppercase font-mono">Previous</span>
                            <span className="text-sm font-bold text-slate-900">{prevProject.displayTitle || prevProject.title}</span>
                        </div>
                    </Link>
                ) : <div />}

                {nextProject && (
                    <Link
                        href={`/projects/${nextProject.slug}`}
                        className="flex items-center justify-end gap-3 p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-right transition-all w-full sm:w-auto shadow-sm"
                    >
                        <div>
                            <span className="text-xs text-slate-500 block uppercase font-mono">Next</span>
                            <span className="text-sm font-bold text-slate-900">{nextProject.displayTitle || nextProject.title}</span>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-500" />
                    </Link>
                )}
            </div>
        </div>
    );
}
