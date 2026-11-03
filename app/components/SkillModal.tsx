'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Cpu } from 'lucide-react';

export interface SkillItem {
    name: string;
    category?: string;
    icon: any;
    description: string;
    details: string[];
    relatedIcons: (React.ElementType | string)[];
    relatedNames?: string[];
}

interface SkillModalProps {
    skill: SkillItem | null;
    onClose: () => void;
}

export default function SkillModal({ skill, onClose }: SkillModalProps) {
    if (!skill) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm"
                />

                {/* Modal Window */}
                <motion.div
                    initial={{ scale: 0.94, opacity: 0, y: 15 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.94, opacity: 0, y: 15 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
                >
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 shadow-sm">
                            {typeof skill.icon === 'string' ? (
                                <img src={skill.icon} alt={skill.name} className="h-8 w-8 object-contain" />
                            ) : (
                                <skill.icon className="h-8 w-8" />
                            )}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{skill.name}</h2>
                                {skill.category && (
                                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                        {skill.category}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-slate-600 mt-0.5">{skill.description}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                        {/* Left: Core Capabilities */}
                        <div>
                            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 mb-3.5 flex items-center gap-2">
                                <Cpu className="h-4 w-4 text-blue-600" />
                                Core Capabilities & Tools
                            </h3>
                            <ul className="space-y-2.5">
                                {skill.details.map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Related Ecosystem & Services */}
                        <div className="flex flex-col">
                            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-700 mb-3.5">
                                Ecosystem & Integrations
                            </h3>
                            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-4 flex-1 flex flex-col justify-center">
                                <div className="grid grid-cols-3 gap-3">
                                    {skill.relatedIcons.map((item, idx) => {
                                        const isPath = typeof item === 'string';
                                        let label = '';
                                        if (isPath) {
                                            label = item.replace('/', '').replace('.png', '').replace('.svg', '');
                                        }

                                        return (
                                            <div
                                                key={idx}
                                                className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all text-center"
                                            >
                                                {isPath ? (
                                                    <img
                                                        src={item}
                                                        alt={label || `Tech ${idx + 1}`}
                                                        className="h-9 w-9 object-contain mb-1.5 transition-transform group-hover:scale-110"
                                                    />
                                                ) : (
                                                    (() => {
                                                        const IconComp = item as React.ElementType;
                                                        return <IconComp className="h-8 w-8 text-blue-600 mb-1.5 transition-transform group-hover:scale-110" />;
                                                    })()
                                                )}
                                                <span className="text-[11px] text-slate-600 group-hover:text-blue-600 font-medium truncate w-full">
                                                    {label || `Service ${idx + 1}`}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
