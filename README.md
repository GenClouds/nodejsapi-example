# TypeScript Express API

A simple Express API written in TypeScript, containerized with Docker, and deployed to AWS App Runner.

## Features

- TypeScript Express API with two endpoints:
  - `/hello` - Returns a simple greeting message
  - `/health` - Returns service health information
- Docker containerization
- Automated CI/CD with GitHub Actions
- Deployment to AWS App Runner via ECR

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Docker (for local containerization)
- AWS account (for deployment)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Tulio-Health/care-capture-nodeapi.git
cd care-capture-nodeapi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The API will be available at http://localhost:3000.

### Testing

Run the test suite:
```bash
npm test
```

### Building

Build the TypeScript project:
```bash
npm run build
```

### Docker

Build and run the Docker container locally:
```bash
docker build -t care-capture-nodeapi .
docker run -p 3000:3000 care-capture-nodeapi
```

## AWS Deployment

This project is configured to automatically deploy to AWS App Runner via GitHub Actions.

### GitHub Secrets Required





# GitHub Actions Secrets Setup Guide

Before your GitHub Actions workflows can successfully deploy your applications to AWS App Runner, you need to configure the following secrets in your GitHub repository settings.

## Prerequisites

1. An AWS account with appropriate permissions
2. An IAM role with permissions for ECR and App Runner
3. ECR repositories created for your applications
4. App Runner services created (or permissions to create them)

## Setting Up GitHub Secrets

### For Node.js Express API

Navigate to your repository settings → Secrets and variables → Actions, and add the following secrets:

| Secret Name | Description |
|-------------|-------------|
| `AWS_ROLE_TO_ASSUME` | ARN of an IAM role with permissions to push to ECR and deploy to App Runner (format: `arn:aws:iam::{account-id}:role/{role-name}`) |
| `AWS_REGION` | The AWS region where your resources are deployed (e.g., `us-east-1`) |
| `ECR_REPOSITORY` | Name of your ECR repository for the Express API |
| `APP_RUNNER_SERVICE` | Name of your App Runner service for the Express API |


## How to Add GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" tab
3. In the left sidebar, click on "Secrets and variables" then "Actions"
4. Click on "New repository secret"
5. Enter the secret name and value
6. Click "Add secret"
7. Repeat for each required secret

## Verifying Secret Configuration

Once all secrets are added, you can verify them by:
1. Going to your repository's "Settings" → "Secrets and variables" → "Actions"
2. Checking that all required secrets are listed (the values will be hidden)
3. Making a small commit to trigger the workflow and checking the workflow logs for any secret-related errors

### AWS Setup Requirements

Before deployment, you need to:

1. Create an ECR repository with the name specified in your `ECR_REPOSITORY` secret
2. Create an App Runner service or use an existing one named in your `APP_RUNNER_SERVICE` secret
3. Create an IAM role with appropriate permissions:
   - `AmazonECR-FullAccess`
   - `AmazonAppRunnerFullAccess`
   - Trust relationship configured for GitHub Actions (`token.actions.githubusercontent.com`)

### Deployment Process

1. Push changes to the `main` branch or manually trigger the workflow using "workflow_dispatch"
2. GitHub Actions will:
   - Build and test the application
   - Build the Docker image
   - Push the image to ECR
   - Deploy to AWS App Runner

## API Endpoints

### GET /hello

Returns a simple greeting message.

Example response:
```json
{
  "message": "Hello, World!"
}
```

### GET /health

Returns service health information.

Example response:
```json
{
  "status": "UP",
  "timestamp": "2023-05-01T12:34:56.789Z",
  "uptime": 123.456,
  "version": "1.0.0",
  "memoryUsage": {
    "rss": 123456789,
    "heapTotal": 123456789,
    "heapUsed": 123456789,
    "external": 123456789,
    "arrayBuffers": 123456789
  }
}
```

## License

This project is licensed under the ISC License.