# Professional Portfolio

A modern, responsive personal portfolio website built with Next.js, Docker, Terraform, and Ansible.

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Framer Motion
- **Infrastructure**: Terraform (AWS EC2, Security Groups)
- **Configuration Management**: Ansible
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- Docker
- Terraform
- Ansible
- AWS Account

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### 1. Infrastructure (Terraform)

Initialize and apply the Terraform configuration to create AWS resources.

```bash
cd terraform
terraform init
terraform apply
```

Note the `instance_ip` output.

### 2. Configuration (Ansible)

Update `ansible/inventory.ini` with the `instance_ip` from Terraform.

```bash
cd ansible
ansible-playbook -i inventory.ini playbook.yml
```

### 3. Docker

Build and run the container manually:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## CI/CD

The `.github/workflows/deploy.yml` workflow automatically builds the Docker image and deploys it to the AWS instance on push to `main`. Ensure you set the following secrets in your GitHub repository:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `AWS_SSH_KEY`
- `HOST_IP`
# Portfolio
