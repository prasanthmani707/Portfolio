'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const resize = () => {
            if (!canvas) return;
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.35;
                this.vy = (Math.random() - 0.5) * 0.35;
                this.size = Math.random() * 1.5 + 0.8;
                const colors = ['rgba(37, 99, 235, 0.45)', 'rgba(14, 165, 233, 0.45)', 'rgba(124, 58, 237, 0.4)'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = w;
                if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h;
                if (this.y > h) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(Math.floor((w * h) / 18000), 65);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();
                p.draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(37, 99, 235, ${0.1 * (1 - dist / 130)})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
            {/* Ambient subtle color glows for white background */}
            <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-400/8 rounded-full blur-[110px]" />
            <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-purple-400/8 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] bg-cyan-400/8 rounded-full blur-[110px]" />
            
            {/* Subtle Tech Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60" />

            <canvas
                ref={canvasRef}
                className="w-full h-full"
            />
        </div>
    );
}
