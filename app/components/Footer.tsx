'use client';

import Link from 'next/link';
import { Github, Mail, MapPin, ArrowUp, Cloud } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-50/90 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <Cloud className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Prasanth</span>
            </Link>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              DevOps & Cloud Engineer specializing in AWS serverless infrastructure, Infrastructure as Code with Terraform & Ansible, and automated CI/CD workflows.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                Coimbatore, Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects & Architecture</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">About & Experience</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">Get in Touch</Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">Connect</h4>
            <div className="space-y-2.5 text-sm text-slate-600">
              <a
                href="https://github.com/prasanthmani707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Github className="h-4 w-4 text-slate-500" />
                <span>github.com/prasanthmani707</span>
              </a>
              <a
                href="mailto:prassnthmani@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4 text-slate-500" />
                <span>prassnthmani@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Prasanth. Built with Next.js & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-all text-xs shadow-sm"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
