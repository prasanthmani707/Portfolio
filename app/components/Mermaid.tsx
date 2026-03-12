'use client';

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
    const mermaidRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            look: 'handDrawn',
            themeVariables: {
                primaryColor: '#3b82f6',
                primaryTextColor: '#f8fafc',
                primaryBorderColor: '#60a5fa',
                lineColor: '#60a5fa',
                secondaryColor: '#8b5cf6',
                tertiaryColor: '#1e293b',
                background: 'transparent',
                mainBkg: '#0f172a',
                nodeBorder: '#3b82f6',
                clusterBkg: '#1e293b',
                clusterBorder: '#334155',
                defaultLinkColor: '#60a5fa',
                titleColor: '#f8fafc',
                edgeLabelBackground: '#0f172a',
            },
            securityLevel: 'loose',
            fontFamily: 'inherit',
        });

        if (mermaidRef.current) {
            mermaid.contentLoaded();
        }
    }, [chart]);

    useEffect(() => {
        const renderDiagram = async () => {
            if (mermaidRef.current && chart) {
                try {
                    // Generate a unique ID for each diagram
                    const id = `mermaid-${Math.floor(Math.random() * 10000)}`;
                    const { svg } = await mermaid.render(id, chart);
                    mermaidRef.current.innerHTML = svg;

                    // Add subtle glow to paths
                    const paths = mermaidRef.current.querySelectorAll('path');
                    paths.forEach(path => {
                        (path as SVGPathElement).style.filter = 'drop-shadow(0 0 2px rgba(96, 165, 250, 0.3))';
                    });
                } catch (error) {
                    console.error('Mermaid rendering failed:', error);
                    mermaidRef.current.innerHTML = '<p class="text-red-500">Failed to render diagram</p>';
                }
            }
        };

        renderDiagram();
    }, [chart]);

    return (
        <div className="mermaid-container bg-gray-800/50 p-6 rounded-xl border border-white/5 overflow-x-auto">
            <div ref={mermaidRef} className="flex justify-center" />
        </div>
    );
};

export default Mermaid;
