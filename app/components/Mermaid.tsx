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
            themeVariables: {
                primaryColor: '#eff6ff',
                primaryTextColor: '#0f172a',
                primaryBorderColor: '#3b82f6',
                lineColor: '#2563eb',
                secondaryColor: '#f5f3ff',
                tertiaryColor: '#f8fafc',
                background: 'transparent',
                mainBkg: '#ffffff',
                nodeBorder: '#3b82f6',
                clusterBkg: '#f8fafc',
                clusterBorder: '#cbd5e1',
                defaultLinkColor: '#2563eb',
                titleColor: '#0f172a',
                edgeLabelBackground: '#ffffff',
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
                    const id = `mermaid-${Math.floor(Math.random() * 10000)}`;
                    const { svg } = await mermaid.render(id, chart);
                    mermaidRef.current.innerHTML = svg;
                } catch (error) {
                    console.error('Mermaid rendering failed:', error);
                    mermaidRef.current.innerHTML = '<p class="text-red-500 text-sm">Failed to render architecture diagram</p>';
                }
            }
        };

        renderDiagram();
    }, [chart]);

    return (
        <div className="mermaid-container bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
            <div ref={mermaidRef} className="flex justify-center" />
        </div>
    );
};

export default Mermaid;
