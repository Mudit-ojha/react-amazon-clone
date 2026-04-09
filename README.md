# 🛒 Amazon Clone

A frontend clone of Amazon built with React.js — featuring product listings, a shopping cart, and user authentication via Firebase. Originally built during college, this project has since been upgraded with a full CI/CD pipeline and Docker containerization.

---

## 🚀 Live Pipeline Status

![CI/CD Pipeline](https://github.com/Mudit-ojha/react-amazon-clone/actions/workflows/ci-cd.yml/badge.svg?branch=master)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js 18, React Router v6 |
| UI Library | Material UI v5, MUI Icons |
| Auth & Database | Firebase v9 |
| Containerization | Docker + Nginx (Alpine) |
| CI/CD | GitHub Actions |

---

## ✨ Features

- 🔐 User authentication (Login / Signup) via Firebase
- 🛍️ Product listing with add to cart functionality
- 🛒 Cart management with price calculation
- 📱 Responsive design using Material UI
- 🚀 Automated CI/CD pipeline on every push
- 🐳 Dockerized and served via Nginx in production

---

## ⚙️ CI/CD Pipeline

This project uses GitHub Actions for a fully automated build and deployment workflow.

Every push to the master branch triggers:

      Push to master
            │
            ▼
      ┌─────────────────┐
      │  Build & Test   │  → Installs deps, runs production build, uploads artifact
      └────────┬────────┘
               │
               ▼
      ┌─────────────────┐
      │  Docker Build   │  → Builds multi-stage Docker image with Nginx
      └────────┬────────┘
               │
               ▼
      ┌─────────────────┐
      │ Deploy Staging  │  → Deploys to staging environment
      └─────────────────┘

Why this matters:
- Zero manual deployments — everything is automated
- Broken builds are caught before they ever reach production
- Docker ensures the app runs identically across all environments

---

## 🐳 Docker Setup

The app uses a multi-stage Docker build to keep the final image lightweight:

- Stage 1 (Builder): Uses node:18-alpine to install dependencies and build the React app
- Stage 2 (Production): Uses nginx:alpine to serve the static build — no Node.js bloat in production

Run locally with Docker:

    docker build -t amazon-clone .
    docker run -p 8090:80 amazon-clone

Then open http://localhost:8090 in your browser.

---

## 💻 Local Development Setup

    git clone https://github.com/Mudit-ojha/react-amazon-clone.git
    cd react-amazon-clone
    npm install --legacy-peer-deps
    cp .env.example .env
    npm start

App will be available at http://localhost:3000

---

## 🔑 Environment Variables

Create a .env file in the root directory based on .env.example:

    REACT_APP_FIREBASE_API_KEY=your_api_key_here
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain_here
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here

You can get these from your Firebase Console at https://console.firebase.google.com/

---

## 📁 Project Structure

    react-amazon-clone/
    ├── .github/
    │   └── workflows/
    │       └── ci-cd.yml        # GitHub Actions pipeline
    ├── public/                  # Static assets
    ├── src/                     # React source code
    ├── Dockerfile               # Multi-stage Docker build
    ├── .dockerignore
    ├── .env.example             # Environment variable template
    └── package.json

---

## 🧠 What I Learned

This project taught me more than just React — going back and adding DevOps tooling around it was the real learning experience:

- How to write a multi-stage Dockerfile that separates build and runtime environments
- How GitHub Actions workflows are structured and triggered
- How to debug real CI/CD failures (dependency conflicts, deprecated actions, branch mismatches)
- Why containerization matters — works on my machine stops being an excuse

---

## 📬 Contact

Mudit Ojha
- GitHub: https://github.com/Mudit-ojha

---

Built with ☕ during college. Upgraded with 🐳 and ⚙️ while preparing for DevOps.
