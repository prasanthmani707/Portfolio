export interface Project {
    slug: string;
    title: string;
    description: string;
    detailedDescription: string;
    techStack: string[];
    github: string;
    live: string;
    architecture: string;
}

export const projects: Project[] = [
    {
        slug: 'credit-based-system',
        title: 'Credit based System',
        description: 'Developed an AWS backend system to track real-time service costs on an hourly basis.',
        detailedDescription: 'This project involved building a robust credit-based billing system for AWS services. It tracks usage in real-time and provides accurate cost estimations even when AWS pricing APIs have latency. The system uses Lambda functions for data ingestion, DynamoDB for storage, and a Next.js frontend for visualization.',
        techStack: ['AWS', 'Next.js', 'Lambda', 'DynamoDB'],
        github: 'https://github.com/prasanthmani707',
        live: 'https://example.com',
        architecture: `
graph TD
    A[User] --> B[Next.js Frontend]
    B --> C[API Gateway]
    C --> D[Lambda Function]
    D --> E[DynamoDB]
    F[AWS CloudWatch] --> D
    G[S3 Pricing Data] --> D
`
    },
    {
        slug: 'serverless-portfolio',
        title: 'Serverless Portfolio',
        description: 'The website you are looking at right now! Built with Next.js and deployed via Docker on EC2.',
        detailedDescription: 'A personal portfolio website designed to showcase projects and skills. It features a modern, responsive design with dynamic animations using Framer Motion. The site is containerized with Docker and deployed on AWS EC2 instances, managed by Ansible for configuration.',
        techStack: ['Next.js', 'Docker', 'Ansible', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/prasanthmani707',
        live: 'https://example.com',
        architecture: `
graph LR
    A[Source Code] --> B[GitHub Actions]
    B --> C[Docker Image]
    C --> D[EC2 Instance]
    D --> E[Nginx Reverse Proxy]
    E --> F[Next.js App]
`
    },
    {
        slug: 'cicd-pipeline-automation',
        title: 'CI/CD Pipeline Automation',
        description: 'Automated deployment pipeline using Jenkins, Docker, and Ansible for a Python Flask application.',
        detailedDescription: 'Implemented a full CI/CD pipeline that automates the testing, building, and deployment of a Flask-based web application. Jenkins handles the orchestration, Docker ensures environment consistency, and Ansible automates the deployment to production servers.',
        techStack: ['Jenkins', 'Docker', 'Ansible', 'Python', 'Flask'],
        github: 'https://github.com/prasanthmani707',
        live: 'https://example.com',
        architecture: `
graph TD
    A[Git Commit] --> B[Jenkins Pipeline]
    B --> C[Unit Tests]
    C --> D[Docker Build]
    D --> E[Push to Registry]
    E --> F[Ansible Deploy]
    F --> G[Production Server]
`
    },
    {
        slug: 'infrastructure-monitor',
        title: 'Infrastructure Monitor',
        description: 'Real-time dashboard for monitoring AWS resources using CloudWatch API and React.',
        detailedDescription: 'A monitoring tool that provides a real-time overview of AWS resource health and performance. It aggregates metrics from CloudWatch and displays them in an intuitive React-based dashboard using Chart.js for data visualization.',
        techStack: ['React', 'AWS SDK', 'CloudWatch', 'Chart.js'],
        github: 'https://github.com/prasanthmani707',
        live: 'https://example.com',
        architecture: `
graph LR
    A[AWS CloudWatch] --> B[Backend Service]
    B --> C[API Gateway]
    C --> D[React Dashboard]
    D --> E[User]
`
    },
    {
        slug: 'log-analysis-tool',
        title: 'Log Analysis Tool',
        description: 'A Python-based tool for analyzing server logs and generating PDF reports automatically.',
        detailedDescription: 'This tool automates the process of parsing massive server logs to identify patterns, errors, and performance bottlenecks. It uses Pandas for data manipulation and ReportLab to generate comprehensive PDF reports for stakeholders.',
        techStack: ['Python', 'Pandas', 'ReportLab', 'Linux'],
        github: 'https://github.com/prasanthmani707',
        live: 'https://example.com',
        architecture: `
graph TD
    A[Server Logs] --> B[Python Script]
    B --> C[Pandas Processing]
    C --> D[Report Generation]
    D --> E[PDF Report]
`
    }
];
