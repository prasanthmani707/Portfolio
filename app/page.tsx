'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Cloud, Server, Code, Database, Globe,
  Box, Layers, Terminal, Cpu, Zap, Github, CheckCircle2, ShieldCheck, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import SkillModal, { SkillItem } from './components/SkillModal';
import { projects } from './data/projects';

const skills: SkillItem[] = [
  {
    name: 'AWS Cloud',
    category: 'Cloud Architecture',
    icon: Cloud,
    description: 'Architecting resilient, cost-optimized, and scalable serverless cloud backends on AWS.',
    details: [
      'Lambda Serverless Compute & EventBridge',
      'DynamoDB NoSQL & DynamoDB Streams',
      'API Gateway REST Endpoints & Routing',
      'S3 Secure Storage & Lifecycle Rules',
      'VPC Subnets, Route Tables & Security Groups',
      'IAM Roles, Policies & Least Privilege',
      'CloudWatch Metrics, Alarms & Logs',
    ],
    relatedIcons: ['/aws.png', '/lambda.png', '/DynamoDB.png', '/Simple Storage Service.png', '/API Gateway.png', '/CloudWatch.png', '/Virtual Private Cloud.png']
  },
  {
    name: 'Terraform',
    category: 'Infrastructure as Code',
    icon: Server,
    description: 'Automating multi-tier cloud infrastructure with modular, reusable, and version-controlled code.',
    details: [
      'Modular Architecture & Reusable Modules',
      'Remote State Management & State Locking',
      'Automated Resource Lifecycle Management',
      'Zero-Touch Provisioning via CodeBuild & Step Functions',
      'Cloud Infrastructure Testing & Drift Detection',
    ],
    relatedIcons: ['/Terraform.png', '/services.png', '/security.png', '/automation.png', '/web-development.png']
  },
  {
    name: 'Ansible',
    category: 'Configuration Management',
    icon: Terminal,
    description: 'Idempotent server provisioning, software configuration, and post-deployment automation.',
    details: [
      'Idempotent YAML Playbook Authoring',
      'Role-based Reusable Deployments',
      'Dynamic & Static Inventory Management',
      'Automated Package & Service Hardening',
      'Seamless Post-Provisioning EC2 Bootstrapping',
    ],
    relatedIcons: ['/Ansible.png', '/playbook.png', '/inventory.png', '/modules.png']
  },
  {
    name: 'Python & Automation',
    category: 'Backend & Scripting',
    icon: Code,
    description: 'Building event-driven backend handlers, operating system automation, and cloud integration scripts.',
    details: [
      'AWS Boto3 SDK Integration & Lambda Handlers',
      'Real-time File System Monitoring & Process Detection',
      'Automated Data Processing & Cost Engines',
      'RESTful API Development & Webhooks',
      'Bash & Shell Scripting for Pipeline Automation',
    ],
    relatedIcons: ['/python.png', '/shell script.png', '/api.png', '/coding.png']
  },
  {
    name: 'Docker & Containers',
    category: 'Containers & DevOps',
    icon: Box,
    description: 'Containerizing services for consistent execution across local development and production.',
    details: [
      'Multi-stage Dockerfile Optimization',
      'Image Size Reduction & Security Hardening',
      'Container Networking & Volume Mounting',
      'Microservice Isolation & Local Sandboxing',
      'CI/CD Container Build Integration',
    ],
    relatedIcons: [Box, Layers, Database, Server]
  },
  {
    name: 'Next.js & Frontend',
    category: 'Full-Stack UI',
    icon: Globe,
    description: 'Building high-performance dashboards, real-time metrics visualizations, and modern web apps.',
    details: [
      'Server-Side Rendering (SSR) & Static Site Generation',
      'Modern React Server & Client Components',
      'Tailwind CSS & Responsive Glassmorphism',
      'API Routes & Real-Time Visualization',
      'Interactive Architecture & Analytics Portals',
    ],
    relatedIcons: ['/Next.js.png', '/java-script.png', '/web-development.png', '/no-sql.png']
  },
];

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full max-w-7xl mx-auto pt-10 pb-20">
        
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-purple-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Headline & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DevOps & Cloud Engineer • AWS Serverless • IaC</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Architecting <span className="text-gradient">Scalable Cloud</span> Systems & Automating Deliveries
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Hi, I'm <strong className="text-slate-900 font-semibold">Prasanth</strong>. I design and build event-driven AWS serverless backends, automate infrastructure with <span className="text-blue-600 font-medium">Terraform & Ansible</span>, and engineer reliable Python automation tools.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Get in Touch
              </Link>

              <a
                href="https://github.com/prasanthmani707"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            {/* Quick Metrics / Highlights Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-xl">
              <div>
                <p className="text-2xl font-bold text-slate-900 tracking-tight">100%</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">IaC Automated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600 tracking-tight">AWS</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Serverless First</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600 tracking-tight">Zero</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Manual Drift</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive DevOps Terminal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/90 shadow-xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-slate-700 text-[11px] font-sans font-medium flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-blue-600" />
                  prasanth@cloud-workstation: ~
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-5 space-y-3.5 text-slate-800 leading-relaxed overflow-x-auto bg-white/70">
                <div className="text-slate-600 font-medium">
                  <span className="text-blue-600 font-bold">$</span> terraform plan -out=tfplan
                </div>
                <div className="text-slate-700 pl-3 border-l-2 border-blue-500 bg-blue-50/50 p-2.5 rounded-r-lg border border-blue-100/60 text-[11px] space-y-0.5">
                  <div className="text-slate-700">+ aws_lambda_function.billing_engine</div>
                  <div className="text-slate-700">+ aws_dynamodb_table.user_wallets</div>
                  <div className="text-slate-700">+ aws_eventbridge_rule.hourly_cron</div>
                  <div className="text-emerald-700 font-bold pt-1">Plan: 3 to add, 0 to change, 0 to destroy.</div>
                </div>

                <div className="text-slate-600 font-medium pt-1">
                  <span className="text-indigo-600 font-bold">$</span> ansible-playbook -i inventory deploy.yml
                </div>
                <div className="text-slate-700 pl-3 border-l-2 border-indigo-500 bg-indigo-50/50 p-2.5 rounded-r-lg border border-indigo-100/60 text-[11px] space-y-0.5">
                  <div>PLAY [Provision & Harden EC2 Instances] ***</div>
                  <div>TASK [Install Runtime & Dependencies] ... <span className="text-emerald-600 font-semibold">ok</span></div>
                  <div>TASK [Configure Systemd Service] ......... <span className="text-amber-600 font-semibold">changed</span></div>
                  <div className="text-blue-700 font-bold pt-1">PLAY RECAP: aws-ec2 : ok=7 changed=2 failed=0</div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-medium">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Cloud environment active & verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS PREVIEW ================= */}
      <section className="w-full max-w-7xl mx-auto py-16 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
              <Sparkles className="h-4 w-4" />
              <span>Production Work & Implementations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
          >
            <span>View All Projects & Interactive Carousel</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {project.badge || 'Cloud Solution'}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-2">
                    {project.displayTitle || project.title}
                  </h3>
                </Link>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-xs rounded-md bg-slate-100 text-slate-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Explore Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-semibold text-blue-600 group-hover:text-blue-700"
                >
                  <span>Architecture & Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TECHNICAL SKILLS MATRIX ================= */}
      <section id="skills" className="w-full max-w-7xl mx-auto py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-2">
            <Cpu className="h-4 w-4" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Technical Skills & Ecosystem
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Click any competency card below to inspect architecture capabilities, tooling details, and related cloud services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setSelectedSkill(skill)}
              className="bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 rounded-2xl p-6 cursor-pointer group flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                    <skill.icon className="h-7 w-7" />
                  </div>
                  {skill.category && (
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {skill.category}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div>
                <ul className="space-y-1.5 mb-4 text-xs text-slate-600">
                  {skill.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="truncate">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>Explore Ecosystem</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CLOUD ENGINEERING PRINCIPLES ================= */}
      <section className="w-full max-w-7xl mx-auto py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Engineering Principles
          </h2>
          <p className="text-slate-600 text-sm">
            Core tenets governing my cloud architecture and deployment philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 border-l-4 border-l-blue-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4 border border-blue-100">
              <Server className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">100% Declarative IaC</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Eliminating manual console changes by managing infrastructure as code with Terraform. Ensuring predictable, repeatable environments with strict state locking.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 border-l-4 border-l-indigo-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 w-fit mb-4 border border-indigo-100">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Event-Driven Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Decoupling components with AWS EventBridge, Lambda triggers, and DynamoDB Streams to achieve near-zero idle compute costs and high elasticity.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 border-l-4 border-l-purple-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-2.5 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4 border border-purple-100">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Security & Zero-Touch Ops</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Practicing least-privilege IAM policies, keeping credentials out of code with runtime environment secrets, and automating configuration with Ansible.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="w-full max-w-5xl mx-auto py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-blue-200 shadow-xl shadow-blue-500/5 bg-gradient-to-b from-white via-white to-blue-50/40">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to collaborate on your next Cloud or DevOps project?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              I'm open to full-time opportunities, consulting on AWS infrastructure, and automation workflows. Let's discuss how I can contribute to your team.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/25"
              >
                Send a Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-sm"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </div>
  );
}
