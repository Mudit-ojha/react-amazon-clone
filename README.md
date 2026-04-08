# Amazon Clone - React.js

A React.js based Amazon frontend clone with automated CI/CD pipeline.

## Tech Stack
- React.js
- Material UI
- Firebase
- GitHub Actions (CI/CD)

## CI/CD Pipeline
This project uses GitHub Actions for automated build and deployment.
Every push to master triggers:
1. Dependency installation
2. Production build
3. Artifact upload
4. Staging deployment

## Local Setup
```bash
npm install --legacy-peer-deps
npm start
```
