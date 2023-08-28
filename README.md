# File Information App

Welcome to the RapidFort Campus Recruitment Drive Offline Project! This project involves creating a REST API-based web server that allows users to upload files and retrieves information about the uploaded files. The project also includes additional features such as a simple user interface, Docker containerization, and Kubernetes deployment.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)

## Project Overview

This is an offline project focused on creating a REST API-based web server that handles file uploads and provides information about the uploaded files. This documentation will guide you through the project’s objectives and implementation.

## Project Objectives

1. **REST API-based Web Server**: The core objective is to build a web server that communicates using REST APIs. This server should handle file uploads and provide information about the uploaded files.

2. **API Definition and Clarity of REST**: Clearly define API endpoints and explain how the API works, including methods such as GET and POST, and how data should be formatted in requests and responses.

3. **Simple UI Integration**: Develop a user interface that makes it easy for users to interact with the web server. This could be a web page where users can upload files and view information about them.

4. **CI/CD Pipelines with Docker**: Set up a continuous integration/deployment pipeline to automate building, testing, and deploying applications. Focus on building Docker containers as part of the pipeline.

5. **Run Docker Containers**: Create bash scripts that simplify the process of running Docker containers. The script should build the container image and start the container with the desired configuration.

6. **Kubernetes Deployment**: Create configuration files (usually in YAML format) to deploy your web server to a Kubernetes cluster. These files define how applications are managed in the Kubernetes environment.

## Implementation Steps

### 1. Backend Development

- Set up Express Server: The `app.js` file sets up an Express server to handle file uploads and responses.
- Install Dependencies: Run `npm install express multer mime-types` to install the required packages.
- Test the Backend: Start the backend server using `node app.js` and test it by sending requests to the endpoints through a browser.

### 2. Docker Containerization

- Create Dockerfile: The `Dockerfile` defines how the backend application should be containerized.
- Build Docker Image: Run `docker build -t rapid-backend .` to build the Docker image.
- Push to Docker Hub: Use the GitHub Actions workflow defined in `docker-build.yml` to automatically build and push the Docker image to Docker Hub.

### 3. Kubernetes Deployment

- Kubernetes Configuration: Create `deployment.yaml` and `service.yaml` to define the Kubernetes Deployment and Service for the backend application.
- Apply Configurations: Apply these configurations to the Kubernetes cluster using the following commands:
  - `kubectl apply -f deployment.yaml`
  - `kubectl apply -f service.yaml`

### 4. Frontend Development

- HTML, JavaScript, CSS Files: Create `index.html` for frontend UI, `script.js`, and `styles.css`.
- Host Frontend Files: Host these frontend files on a web server, static hosting service, or locally. Ensure files are accessible via a URL.
- Test Frontend UI: Access the hosted frontend UI through a web browser. Interact with the UI to upload files, trigger requests to the backend API, and display file information.

## Contact

If you have any questions or suggestions, feel free to contact us at example@example.com.

## Features

- Upload files through a REST API endpoint.
- Retrieve information about uploaded files.
- Simple user interface for interacting with the web server.
- Docker containerization for easy deployment.
- Kubernetes manifest files for hosting the web server on a Kubernetes cluster.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd RapidFort-Campus-Recruitment-Project`
3. Install project dependencies: `npm install`

## Usage

1. Run the web server: `npm start`
2. Access the user interface: Open a web browser and navigate to `http://localhost:3000`
3. Upload files through the UI and view information about them.

## Deployment

### Docker Containerization

To build and run the Docker container, follow these steps:

1. Build the Docker image: `docker build -t rapidfort-web-server .`
2. Run the Docker container: `docker run -p 3000:3000 rapidfort-web-server`

### Kubernetes Deployment

To deploy the web server on a Kubernetes cluster, use the provided Kubernetes manifest files:

1. Apply the deployment manifest: `kubectl apply -f kubernetes/deployment.yaml`
2. Apply the service manifest: `kubectl apply -f kubernetes/service.yaml`
