export interface Project {
    slug: string;
    title: string;
    description: string;
    detailedDescription: string[];
    objective: string[];
    scope: string;
    techStack: string[];
    github: string;
    architecture: string;
}

export const projects: Project[] = [
    {
        slug: 'credit-based-system',
        title: 'Credit based System',
        objective: ['Track AWS service usage on an hourly basis',

            'Calculate costs accurately despite pricing API delays',

            'Provide a credit-based billing mechanism',

            'Enable users to view usage and remaining credits in real time'],
        description: 'Developed an AWS backend system to track real-time service costs on an hourly basis.',
        detailedDescription: ['This project involved building a robust credit-based billing system for AWS services. It tracks usage in real-time and provides accurate cost estimations even when AWS pricing APIs have latency. The system uses Lambda functions for data ingestion, DynamoDB for storage, and a Next.js frontend for visualization.'],
        techStack: ['AWS', 'Next.js', 'Lambda', 'DynamoDB', 'Codebuild', 'Api Gateway', 'Cloudwatch', 'S3', 'IAM', 'Policy'],
        github: 'https://github.com/prasanthmani707',
        scope: 'The scope of this project includes real-time tracking of EC2 instance usage, calculation of credit consumption based on resource utilization, and generation of accurate cost estimations. It also provides a dashboard usage and cost details, along with backend automation to handle data collection, processing, and updates efficiently.',
        architecture: `
graph TD
    subgraph Frontend_Layer [User Interface]
        A[User] --> B[Next.js Portfolio]
    end

    subgraph API_Layer [Gateway & Routing]
        B --> C[API Gateway]
    end

    subgraph Wallet_Services [Wallet Management]
        C --> D[Wallet Lambda]
        D --> E[(UserWallet Table)]
        D --> F[WalletHistory Lambda]
        F --> G[(WalletHistory Table)]
    end

    subgraph Monitoring_Layer [Observability]
        D --> H[CloudWatch Logs]
        F --> H
    end

    subgraph Resource_Tracking [EC2 & Billing]
        I[EC2 Instance] --> J[EventBridge Rules]
        J --> K[InstanceRegistry Lambda]
        K --> L[(InstanceRegistry Table)]
        
        J --> N[ComputeCost Lambda]
        N --> O[(ComputeCost Table)]
        
        J --> U[StorageCost Lambda]
        U --> V[(StorageCost Table)]
    end

    subgraph Deduction_Engine [Cost Processing]
        O --> R[DynamoDB Stream]
        R --> S[DeductComputeCost Lambda]
        S --> E
        
        V --> X[DynamoDB Stream]
        X --> Y[DeductStorageCost Lambda]
        Y --> E
    end

    style Frontend_Layer fill:#1e293b,stroke:#3b82f6,stroke-width:2px
    style API_Layer fill:#1e293b,stroke:#8b5cf6,stroke-width:2px
    style Wallet_Services fill:#0f172a,stroke:#3b82f6
    style Resource_Tracking fill:#0f172a,stroke:#8b5cf6
`
    },
    {
        slug: 'aws-infra-automation-terraform-ansible',
        title: 'aws-infra-automation-terraform-ansible',
        objective: [
            'To design and implement a secure, fully automated cloud infrastructure solution using Terraform and Ansible',

            'To help users or clients who do not have knowledge of AWS environment creation',

            'To automatically create virtual servers (EC2) on Amazon Web Services without manual steps',

            'To provision infrastructure using Infrastructure as Code (IaC) best practices',

            'To automate server configuration (software installation and services) using Ansible',

            'To securely use user-provided AWS Access Key and Secret Key without hard-coding credentials',

            'To deliver a ready-to-use server to the user with minimal effort',

            'To reduce manual errors, setup time, and operational complexity for clients'

        ],
        description: 'Developed and implemented an end-to-end AWS infrastructure automation solution using Terraform and Ansible.',
        detailedDescription: ['The project securely used AWS Access Key and Secret Key through environment variables to avoid hard-coded credentials. Using Terraform, I provisioned cloud infrastructure including an Amazon Web Services EC2 instance following Infrastructure as Code (IaC) principles.\n',
            'After infrastructure provisioning, Ansible was used to automatically configure the EC2 instance by installing required packages and setting up services without any manual intervention.\n',
            'The entire workflow was fully automated, repeatable, secure, and designed to reduce manual effort, configuration errors, and deployment time.'
        ],
        techStack: [
            "Next.js",
            "Python",
            "Terraform",
            "Ansible",
            "AWS",
            "AWS EC2",
            "AWS CodeBuild",
            "AWS EventBridge",
            "AWS Step Functions",
            "IAM "
        ],

        github: 'https://github.com/prasanthmani707',
        scope: 'This project automates the creation of cloud infrastructure on Amazon Web Services using Terraform, enabling automated provisioning of EC2 virtual servers without requiring any manual interaction with the AWS Management Console. It securely handles user-provided AWS Access Key and Secret Key, ensuring credentials are not hard-coded. The solution also automates post-provisioning server configuration using Ansible, delivering a fully configured, ready-to-use server to users or clients. By abstracting the complexity of AWS and Linux server management, the project eliminates the need for technical expertise from end users. It ensures consistent, repeatable, and scalable infrastructure deployments while significantly reducing manual effort, setup time, and configuration errors. The solution supports multiple use cases, including development, testing, and basic production environments.',
        architecture: `
graph LR

%% -------- API & MAIN SERVER --------

A[User API Call] --> B[Main EC2 Server]
B --> C[Python Automation Script]
C --> D[Terraform Execution]


%% -------- INFRA CREATED BY TERRAFORM --------

subgraph "Temporary Automation Infrastructure (Created by Terraform)"
    E[Amazon EventBridge]
    F[AWS CodeBuild Project]
    G[AWS Step Functions]
    H[IAM Roles & Policies]
end

D --> E
D --> F
D --> G
D --> H


%% -------- DEPLOYMENT FLOW --------

E -->|Trigger Build Event| F
F --> I[Provision Infrastructure in User AWS Account]
I --> J[Create EC2 & Resources]
J --> K[Run Ansible Configuration]
K --> L[Send Email to User]


%% -------- CLEANUP FLOW --------

F -->|Build Success Event| G
G --> M[Destroy EventBridge]
G --> N[Destroy CodeBuild]
G --> O[Destroy Step Functions]
G --> P[Destroy IAM Roles & Policies]

P --> Q[Final Environment Active in User Account]

`
    },  
    {
        slug: 'smart-download-organizer',
        title: 'Smart Download Organizer',
        objective: [
            "Monitor the Downloads folder in real time using Python.",
            "Detect completed downloads and identify file types.",
            "Automatically organize files into categorized folders.",
            "Maintain a clean and structured file system through automation."
        ],
        description: 'A Python automation script that monitors downloads and automatically organizes completed files into categorized folders.',
        detailedDescription: ['Developed an intelligent Python automation tool that automatically organizes downloaded files in real time. The script detects when a web browser such as Google Chrome, Microsoft Edge, or Mozilla Firefox is running and starts monitoring the Downloads folder. Once a download is completed, the program identifies the file type and automatically moves it to categorized folders such as Music, Videos, Images, and Documents.\n',
            'The system ignores temporary download files (e.g., .crdownload, .part) to ensure files are only processed after the download finishes. When the browser closes, monitoring automatically stops, making the script efficient and resource-friendly.\n',
            'This project demonstrates practical automation, real-time file system monitoring, and process detection to keep the system organized without manual intervention.',
        ],
        techStack: ['Python'],
        github: 'https://github.com/prasanthmani707/windows_autometion',
        scope: 'The scope of this project is to automate the organization of files downloaded from web browsers such as Google Chrome, Microsoft Edge, and Mozilla Firefox. The system monitors the Downloads folder in real time, detects completed downloads, identifies file types, and automatically moves them into appropriate categorized folders like Music, Videos, Images, and Documents. This helps maintain a clean and organized file system while reducing manual file management.',
        architecture: `
graph TD
    A[Browser Opened] --> B[Detect Browser Process]
    B --> C[Start Monitoring Downloads Folder]
    C --> D[Download Completed]
    D --> E[Identify File Type]
    E --> F{File Category}
    F -->|Music| G[Move to Music Folder]
    F -->|Videos| H[Move to Videos Folder]
    F -->|Images| I[Move to Images Folder]
    F -->|Documents| J[Move to Documents Folder]
    G --> K[Log Action with Timestamp]
    H --> K
    I --> K
    J --> K
    K --> L[Stop Monitoring When Browser Closes]
`
    }
];
