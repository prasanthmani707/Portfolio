'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Have a project in mind or want to discuss cloud infrastructure? I'd love to hear from you.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <span>hello@example.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <span>+1 (234) 567-8900</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/5 p-8 rounded-xl border border-white/10"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none resize-none"
                                placeholder="How can I help you?"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900"
                        >
                            Send Message <Send className="ml-2 h-5 w-5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
