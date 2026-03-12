'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Cloud, Server, Code, Database, Globe, Lock,
  HardDrive, MessageSquare, Shield, Key, Box, Layers, Terminal,
  Cpu, Zap, Layout, Image as ImageIcon, Anchor, FileJson, Workflow,
  RefreshCw, Play, Settings, FileWarning, Eye
} from 'lucide-react';
import Link from 'next/link';
import SkillModal from './components/SkillModal';

const skills = [
  {
    name: 'AWS',
    icon: Cloud,  
    description: 'Expertise in architecting scalable cloud solutions.',
    details: [
      'EC2, S3, & Lambda',
      'DynamoDB',
      'Codebuild',
      'API Gateway',
      'VPC Networking & Security',
      'IAM & Policy Management',
      'CloudWatch Monitoring',
    ],
    relatedIcons: ['/lambda.png', '/DynamoDB.png', '/Simple Storage Service.png','/API Gateway.png','/Codebuild.png','/CloudWatch.png'] // Add your third image here
  },
  {
    name: 'Terraform',
    icon: Server,
    description: 'Infrastructure as Code (IaC) for automated provisioning.',
    details: ['Module Development', 'State Management', 'Multi-cloud Provisioning', 'Terraform Cloud Integration', 'Infrastructure Testing'],
    relatedIcons: ['/services.png','/web-development.png', '/Terraform.png', '/security.png', '/automation.png']
  },
  {
    name: 'Ansible',
    icon: Code,
    description: 'Configuration management and application deployment automation.',
    details: ['Playbook Creation', 'Role Management', 'Inventory Management', 'Custom Modules'],
    relatedIcons: ['/playbook.png','/Ansible.png','/inventory.png', '/modules.png']
  },
  {
    name: 'basic programming  knowledge ',
    icon: Code,
    description: 'Building performant and SEO-friendly web applications.',
    details: ['Server-Side Rendering (SSR)', 'Static Site Generation (SSG)', 'API Routes', 'React Hooks', 'Tailwind CSS Integration'],
    relatedIcons: ['/python.png', '/Next.js.png', '/java-script.png', '/no-sql.png', '/api.png','/shell script.png']
  },
  {
    name: 'Docker',
    icon: Database,
    description: 'Containerizing applications for consistent environments.',
    details: ['Dockerfile Optimization', 'Docker Compose', 'Multi-stage Builds', 'Container Networking', 'Volume Management'],
    relatedIcons: [Box, Layers, Database, Anchor, Server]
  },
];

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto py-20"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Building <span className="text-gradient">Scalable</span> Cloud Infrastructure
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Hi, I'm a DevOps Engineer and Full Stack Developer. I help businesses build, deploy, and scale modern web applications on AWS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div
            initial={{ scale: 5, opacity: 0, x: -200 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.5
            }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)]"
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 hover:bg-white/10 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="w-full max-w-7xl mx-auto py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedSkill(skill)}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="h-10 w-10 text-blue-400 mb-4" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
              <div className="mt-4 text-xs font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view details &rarr;
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </div>
  );
}
