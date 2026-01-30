# simple-node-service
A simple Node.js application demonstrating Basic Authentication, environment-based configuration, Dockerization, and CI/CD deployment using GitHub Actions.

📌 Features
GET / – Public route returning Hello, world!
GET /secret – Protected route using Basic Auth
Secrets managed via environment variables
Dockerized for portability
Automated build & deployment using GitHub Actions
Secure secrets handling (no .env inside Docker image)


🛠️ Tech Stack
Node.js
Express.js
Basic Auth
Docker
GitHub Actions
Docker Hub
Linux server (SSH deployment)

🐳 Running with Docker (Local)
Build the image
docker build -t node-service .

Run the container
docker run --rm -p 3000:3000 --env-file .env node-service


🔑 Authentication
When accessing /secret, the browser will prompt for credentials.
Username: value of USERNAME
Password: value of PASSWORD
If valid, the secret message is returned.
If invalid, a 401 Unauthorized error is shown.


⚙️ CI/CD Pipeline (GitHub Actions)
On every push to the main branch:
Docker image is built
Image is pushed to Docker Hub
Image is deployed to a remote server via SSH
Environment variables are injected securely at runtime
Secrets are stored using GitHub Repository Secrets.

The service runs on a remote server and is exposed on:
http://SERVER_IP:3000

For Local
http://localhost:3000/


http://localhost:3000/secret  -----protected route using basic auth

# Project URL
https://roadmap.sh/projects/dockerized-service-deployment

