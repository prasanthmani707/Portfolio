import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-3 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
