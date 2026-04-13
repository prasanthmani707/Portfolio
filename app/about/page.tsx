'use client';

import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold mb-4 text-gradient">About Me</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Get to know more about my background, experience, and journey in tech.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 p-8 rounded-xl border border-white/10"
                >
                    <div className="flex items-center mb-6">
                        <User className="h-8 w-8 text-blue-400 mr-4" />
                        <h2 className="text-2xl font-bold">Bio</h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                         Associate Software Engineer with strong experience in backend development and AWS serverless
technologies. Skilled in building scalable, event-driven applications using Python and cloud
services. Experienced in developing POCs, automating infrastructure, and building cybersecurity
lab platforms.

                    </p>
                </motion.div>

                {/* Experience & Education */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 p-8 rounded-xl border border-white/10"
                    >
                        <div className="flex items-center mb-6">
                            <Briefcase className="h-8 w-8 text-purple-400 mr-4" />
                            <h2 className="text-2xl font-bold">Experience</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="border-l-2 border-purple-500 pl-4">
                                <h3 className="font-bold text-white">Associate Software engineer </h3>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 p-8 rounded-xl border border-white/10"
                    >
                        <div className="flex items-center mb-6">
                            <GraduationCap className="h-8 w-8 text-green-400 mr-4" />
                            <h2 className="text-2xl font-bold">Education</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="border-l-2 border-green-500 pl-4">
                                <h3 className="font-bold text-white">BCA</h3>

                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
