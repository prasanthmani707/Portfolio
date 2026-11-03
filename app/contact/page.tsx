'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
    Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle,
    Copy, Check, Clock, Github, MessageSquare, Sparkles
} from 'lucide-react';

type Status =
    | { state: 'idle'; message: '' }
    | { state: 'success'; message: string }
    | { state: 'error'; message: string };

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<Status>({ state: 'idle', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const handleCopy = (text: string, type: 'email' | 'phone') => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(text);
            if (type === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            }
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmitting) return;

        const trimmed = {
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
        };

        if (!trimmed.name || !trimmed.email || !trimmed.message) {
            setStatus({ state: 'error', message: 'Please provide your name, email, and message.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ state: 'idle', message: '' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(trimmed),
            });

            if (res.ok) {
                setStatus({ state: 'success', message: 'Thank you! Your message was sent successfully. I will get back to you shortly.' });
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const data = await res.json().catch(() => ({}));
                setStatus({
                    state: 'error',
                    message: data?.error || 'Failed to deliver message. Please try again or email directly.',
                });
            }
        } catch (error) {
            console.error('Contact form submit error:', error);
            setStatus({
                state: 'error',
                message: 'Unable to reach the server. Please check your connection or reach out via email.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Let's Build Together</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    Get In <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    Have an upcoming cloud migration, serverless backend project, or DevOps opportunity? Send me a message or connect directly.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Direct Contact Info & Highlights */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="lg:col-span-5 space-y-6"
                >
                    {/* Information Box */}
                    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Direct Channels</h2>
                                <p className="text-xs text-slate-500 font-mono">Reach out anytime</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Email Item */}
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-blue-400 transition-all">
                                <div className="flex items-center gap-3.5 overflow-hidden">
                                    <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div className="truncate">
                                        <p className="text-xs text-slate-500 font-mono">Email</p>
                                        <a
                                            href="mailto:prassnthmani@gmail.com"
                                            className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                                        >
                                            prassnthmani@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleCopy('prassnthmani@gmail.com', 'email')}
                                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors shrink-0 ml-2 shadow-sm"
                                    title="Copy email"
                                >
                                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                                </button>
                            </div>

                            {/* Phone Item */}
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-blue-400 transition-all">
                                <div className="flex items-center gap-3.5">
                                    <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-mono">Phone</p>
                                        <a
                                            href="tel:+918072529252"
                                            className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                                        >
                                            +91 8072529252
                                        </a>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleCopy('+918072529252', 'phone')}
                                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors shrink-0 ml-2 shadow-sm"
                                    title="Copy phone number"
                                >
                                    {copiedPhone ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                                </button>
                            </div>

                            {/* Location Item */}
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
                                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-mono">Location</p>
                                    <p className="text-sm font-semibold text-slate-900">Coimbatore, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Availability Note */}
                        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-blue-800">
                                <Clock className="h-4 w-4 text-blue-600" />
                                <span>Typical Response Time</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Messages are typically answered within 24 hours. For urgent discussions, feel free to call directly.
                            </p>
                        </div>
                    </div>

                    {/* Social Link Card */}
                    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Github className="h-5 w-5 text-slate-700" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">GitHub Profile</h4>
                                <p className="text-xs text-slate-500 font-mono">prasanthmani707</p>
                            </div>
                        </div>
                        <a
                            href="https://github.com/prasanthmani707"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors shadow-sm"
                        >
                            Visit Repo
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="lg:col-span-7 bg-white border border-slate-200 shadow-sm rounded-2xl p-8 sm:p-10"
                >
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Send a Direct Message</h2>
                        <p className="text-sm text-slate-600 mt-1">Fill out the form below to initiate a discussion.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                                Your Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-slate-900 placeholder-slate-400 transition-all outline-none text-sm shadow-sm"
                                placeholder="e.g. Alex Smith"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                                Your Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-slate-900 placeholder-slate-400 transition-all outline-none text-sm shadow-sm"
                                placeholder="e.g. alex@company.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-slate-900 placeholder-slate-400 transition-all outline-none resize-none text-sm leading-relaxed shadow-sm"
                                placeholder="Describe your project, timeline, or position details..."
                                required
                            />
                        </div>

                        {status.state !== 'idle' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${
                                    status.state === 'success'
                                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                                        : 'bg-red-50 border-red-300 text-red-800'
                                }`}
                                role="alert"
                            >
                                {status.state === 'success' ? (
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                                ) : (
                                    <AlertTriangle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                                )}
                                <span className="font-medium">{status.message}</span>
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            {isSubmitting ? (
                                <span>Sending Message...</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send className="h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
