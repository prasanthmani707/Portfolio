'use client';

import { motion } from 'framer-motion';
import {
    User, Briefcase, GraduationCap, MapPin, Award,
    CheckCircle2, Cloud, ArrowRight, Github
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
                    <User className="h-3.5 w-3.5" />
                    <span>Background & Career</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    Engineering <span className="text-gradient">Profile</span>
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    Associate Software Engineer with strong experience in backend development, AWS serverless technologies, and Infrastructure as Code.
                </p>
            </motion.div>

            {/* Profile & Bio Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                
                {/* Left Card: Main Bio & Overview */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="lg:col-span-7 bg-white border border-slate-200 shadow-sm rounded-2xl p-8 flex flex-col justify-between"
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-sm">
                                <Cloud className="h-7 w-7 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Prasanth</h2>
                                <p className="text-sm text-blue-600 font-mono font-semibold">Associate Software Engineer</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                            <p>
                                I am an <strong className="text-slate-900 font-semibold">Associate Software Engineer</strong> with focused expertise in backend development and AWS serverless technologies. I specialize in building scalable, event-driven applications using Python and cloud-native services.
                            </p>
                            <p>
                                Throughout my work, I have engineered proof-of-concepts (POCs), automated cloud infrastructure using <span className="text-blue-600 font-medium">Terraform and Ansible</span>, and designed platforms for cybersecurity lab environments.
                            </p>
                            <p>
                                My engineering philosophy centers on removing manual operational friction through declarative Infrastructure as Code, enforcing strict least-privilege cloud security, and maximizing resource efficiency.
                            </p>
                        </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            <span>Coimbatore, Tamil Nadu, India</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/prasanthmani707"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-4 w-4" />
                            </a>
                            <Link
                                href="/contact"
                                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Right Card: Quick Competencies & Highlights */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="lg:col-span-5 space-y-6"
                >
                    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 space-y-4">
                        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            Core Specializations
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { title: 'AWS Serverless', desc: 'Lambda, DynamoDB Streams, API Gateway, S3, EventBridge' },
                                { title: 'Infrastructure as Code', desc: 'Terraform modular provisioning & remote state management' },
                                { title: 'Configuration Management', desc: 'Ansible playbooks, role-based execution, automated EC2 setup' },
                                { title: 'Backend & Automation', desc: 'Python Boto3 SDK, system process monitors, RESTful APIs' },
                            ].map((spec, i) => (
                                <li key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                                    <div className="text-sm font-semibold text-slate-900">{spec.title}</div>
                                    <div className="text-xs text-slate-600">{spec.desc}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500 font-mono uppercase">Status</p>
                            <p className="text-base font-bold text-slate-900 mt-0.5">Open to Opportunities</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-700">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Ready to Deploy
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Experience & Education Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                
                {/* Experience Column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 bg-white border border-slate-200 shadow-sm rounded-2xl p-8"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-600">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
                            <p className="text-xs text-slate-500 font-mono">Professional Track Record</p>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-purple-200 pl-6 ml-2 space-y-8">
                        <div className="relative">
                            <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-purple-600 shadow-sm" />
                            
                            <div>
                                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                                    Engineering Role
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mt-2">Associate Software Engineer</h3>
                                <p className="text-sm text-purple-600 font-mono font-semibold mb-4">Backend, Cloud & Automation</p>
                            </div>

                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                                    <span>Architected scalable, event-driven backend services utilizing AWS Lambda, DynamoDB, API Gateway, and EventBridge.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                                    <span>Codified cloud infrastructure using Terraform, enabling automated provisioning of EC2 instances and serverless stacks.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                                    <span>Authored Ansible playbooks to automate configuration management, package installation, and service setups without manual intervention.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                                    <span>Engineered proof-of-concept (POC) solutions and automation pipelines for cybersecurity lab simulation platforms.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Education Column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 bg-white border border-slate-200 shadow-sm rounded-2xl p-8 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Education</h2>
                                <p className="text-xs text-slate-500 font-mono">Academic Foundation</p>
                            </div>
                        </div>

                        <div className="relative border-l-2 border-emerald-200 pl-6 ml-2 space-y-6">
                            <div className="relative">
                                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-emerald-600 shadow-sm" />
                                
                                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    Undergraduate
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mt-2">
                                    Bachelor of Computer Applications (BCA)
                                </h3>
                                <p className="text-sm text-slate-600 mt-1 mb-4">
                                    Foundations in Software Development, Cloud Computing & Systems.
                                </p>

                                <div className="space-y-2 text-xs text-slate-700">
                                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                                        Core focus on Operating Systems, Networking, Data Structures & Database Management Systems.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-semibold text-blue-700 transition-all shadow-sm"
                        >
                            <span>Explore Projects & Case Studies</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Philosophy Section */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-200 shadow-sm bg-gradient-to-b from-white via-white to-blue-50/30">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        How I Approach Engineering
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        I believe in infrastructure that builds itself, recovers itself, and alerts before anything fails. Combining Terraform, Ansible, and AWS Serverless paradigms delivers resilient cloud environments with zero maintenance drag.
                    </p>
                    <div className="pt-4 flex justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/25"
                        >
                            <span>Start a Conversation</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
