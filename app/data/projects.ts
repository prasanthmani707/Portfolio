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
        title: 'Credit-Based AWS Billing System',
        objective: ['Track AWS service usage on an hourly basis',

            'Calculate costs accurately despite pricing API delays',

            'Provide a credit-based billing mechanism',

            'Enable users to view usage and remaining credits in real time'],
        description: 'Built an AWS backend system to track service usage, estimate costs, and manage credit-based billing.',
        detailedDescription: ['This project involved building a credit-based billing system for AWS services. It tracks usage in near real time and provides cost estimations even when AWS pricing APIs have latency. The system uses Lambda functions for data ingestion, DynamoDB for storage, and a Next.js frontend for visualization.'],
        techStack: ['AWS', 'Next.js', 'Lambda', 'DynamoDB', 'CodeBuild', 'API Gateway', 'CloudWatch', 'S3', 'IAM', 'Policy'],
        github: 'https://github.com/prasanthmani707',
        scope: 'The scope of this project includes tracking EC2 instance usage, calculating credit consumption based on resource utilization, and generating cost estimations. It provides a dashboard for usage and cost details, along with backend automation for data collection, processing, and updates.',
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
        title: 'AWS Infrastructure Automation',
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
        description: 'Automated AWS infrastructure provisioning and server configuration using Terraform and Ansible.',
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
            "IAM"
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
        slug: 'splunk-standalone-server-data-onboarding',
        title: 'Splunk Standalone Monitoring',
        objective: [
            'To create a standalone Splunk server for log monitoring and search',
            'To configure Splunk Enterprise on a Linux server without using a clustered setup',
            'To connect a client server to Splunk using Universal Forwarder',
            'To onboard system and application logs into Splunk indexes',
            'To validate data ingestion using SPL searches and dashboards',
            'To build a simple monitoring setup for troubleshooting and security visibility'
        ],
        description: 'Configured a standalone Splunk server and onboarded Linux/application logs using Universal Forwarder.',
        detailedDescription: [
            'This project focused on building a standalone Splunk setup where one Splunk Enterprise server handled indexing, searching, and the web interface. The server was created and configured as the central log monitoring platform for collecting machine data from client systems.\n',
            'A Splunk Universal Forwarder was installed on a client server and configured to send system logs and application logs to the standalone Splunk server. Indexes, receiving ports, and forwarding settings were configured to complete the end-to-end data onboarding flow.\n',
            'The project demonstrates practical Splunk administration skills including server setup, log forwarding, index creation, data validation, and SPL-based searching without depending on a large enterprise cluster.'
        ],
        techStack: [
            'Splunk Enterprise',
            'Splunk Universal Forwarder',
            'Linux',
            'AWS EC2',
            'Security Groups',
            'SPL',
            'Log Monitoring',
            'Data Onboarding'
        ],
        github: 'https://github.com/prasanthmani707',
        scope: 'The scope of this project includes creating a standalone Splunk server, configuring the Splunk web interface, enabling data receiving, connecting a client server through Splunk Universal Forwarder, and onboarding logs such as Linux system logs and application logs. The project covers validating indexed data with SPL searches and creating a basic monitoring workflow for troubleshooting, operational visibility, and security log analysis.',
        architecture: `
graph TD
    A[Admin User] --> B[Splunk Web]
    B --> C[Standalone Splunk Server]
    C --> D[(Splunk Indexes)]
    C --> E[SPL Search]

    F[Client Linux Server] --> G[Universal Forwarder]
    G -->|Port 9997| C
    H[System Logs] --> G
    I[Application Logs] --> G

    J[Security Group Rules] --> C
    K[Port 8000 Web UI] --> C
    L[Port 8089 Management] --> C
    M[Port 9997 Data Receiving] --> C
`
    },
    {
        slug: 'splunk-non-cluster-distributed-setup',
        title: 'Splunk Distributed Monitoring',
        objective: [
            'To design a distributed Splunk environment without indexer or search head clustering',
            'To create separate Splunk servers for Search Head, Indexer, and Deployment Server roles',
            'To configure the Indexer to receive forwarded data from client systems',
            'To connect the Search Head to the Indexer as a search peer',
            'To manage Universal Forwarder configuration through the Deployment Server',
            'To onboard logs from client servers and verify search visibility from the Search Head'
        ],
        description: 'Built a non-cluster Splunk setup with separate Search Head, Indexer, Deployment Server, and Forwarder roles.',
        detailedDescription: [
            'This project implemented a distributed Splunk architecture without clustering. Separate Linux servers were used for the Search Head, Indexer, and Deployment Server to demonstrate real-world Splunk role separation while keeping the setup simpler than a full clustered enterprise deployment.\n',
            'The Indexer was configured to receive data from Universal Forwarders, while the Search Head was connected to the Indexer as a search peer. The Deployment Server was used to manage forwarder configurations and push log monitoring inputs to client machines.\n',
            'The project shows how Splunk components communicate in a distributed environment, how logs are onboarded from client servers, and how data can be searched centrally from the Search Head.'
        ],
        techStack: [
            'Splunk Enterprise',
            'Search Head',
            'Indexer',
            'Deployment Server',
            'Splunk Universal Forwarder',
            'Linux',
            'AWS EC2',
            'SPL',
            'Data Onboarding'
        ],
        github: 'https://github.com/prasanthmani707',
        scope: 'The scope of this project includes provisioning multiple Linux servers, assigning Splunk roles, configuring the Indexer as the data receiving layer, connecting the Search Head to the Indexer for distributed search, and using the Deployment Server to manage Universal Forwarder configuration. The project covers forwarding logs from client machines, validating indexed events, and searching onboarded data from the Search Head in a non-cluster distributed Splunk setup.',
        architecture: `
graph TD
    A[Admin User] --> B[Search Head]
    B -->|Distributed Search| C[Indexer]
    C --> D[(Splunk Indexes)]

    E[Deployment Server] -->|Forwarder Apps| F[Universal Forwarder]
    G[Client Server Logs] --> F
    F -->|Forward Data Port 9997| C

    H[Search Port 8089] --> B
    I[Receiving Port 9997] --> C
    J[Splunk Web Port 8000] --> B
`
    },
    {
        slug: 'aws-lambda-deployment-automation-fastapi',
        title: 'Lambda Deployment Automation',
        objective: [
            'To build a FastAPI backend for managing multiple AWS Lambda deployments',
            'To organize each Lambda function in a separate folder inside one repository',
            'To test Lambda code locally before deploying it to AWS',
            'To deploy Lambda functions without using the AWS Management Console',
            'To automate build and deployment when code is pushed to the repository',
            'To reduce manual deployment errors and make Lambda updates repeatable'
        ],
        description: 'Built a FastAPI backend to test, package, and deploy multiple AWS Lambda functions automatically.',
        detailedDescription: [
            'This project was built to manage multiple AWS Lambda functions from a single repository. Each folder represented one Lambda function, making it easy to separate function code while keeping deployment automation centralized.\n',
            'A FastAPI backend was used as the local control layer for testing Lambda logic, selecting function folders, building deployment packages, and triggering updates to AWS Lambda without opening the AWS Console.\n',
            'The repository workflow was designed so that pushing code could automatically start a CI/CD process, build the Lambda package, and update the target Lambda function in AWS. This created a repeatable deployment process for serverless backend development.'
        ],
        techStack: [
            'FastAPI',
            'Python',
            'AWS Lambda',
            'Boto3',
            'AWS CLI',
            'GitHub',
            'CI/CD',
            'IAM',
            'CloudWatch'
        ],
        github: 'https://github.com/prasanthmani707',
        scope: 'The scope of this project includes designing a FastAPI backend that manages multiple Lambda function folders, supports local testing, packages selected Lambda code, and deploys updates to AWS Lambda using automation. The project also includes a Git-based CI/CD workflow where repository changes can automatically build and deploy Lambda functions, removing the need for manual AWS Console updates and improving deployment consistency across serverless functions.',
        architecture: `
graph TD
    A[Developer] --> B[Git Repository]
    B --> C[FastAPI Backend]
    C --> D[Select Lambda Folder]
    D --> E[Run Local Test]
    E --> F[Build Deployment Package]
    F --> G[Deploy to AWS Lambda]
    G --> H[CloudWatch Logs]

    B --> I[Code Push]
    I --> J[CI CD Pipeline]
    J --> F
    G --> K[Updated Lambda Function]
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
