# File Information App

Welcome to the RapidFort Campus Recruitment Drive Offline Project! This project involves creating a REST API-based web server that allows users to upload files and retrieves information about the uploaded files. The project also includes additional features such as a simple user interface, Docker containerization, and Kubernetes deployment.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

The RapidFort Campus Recruitment Drive project is aimed at demonstrating your ability to create a web server that accepts file uploads, provides information about uploaded files, and showcases your understanding of various development practices such as REST APIs, Docker containerization, and Kubernetes deployment.

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

## Contributing

Contributions to this project are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make changes and commit: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to contact us at example@example.com.
