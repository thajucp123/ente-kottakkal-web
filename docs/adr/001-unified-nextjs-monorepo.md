# ADR 001: Unified Next.js Monorepo

**Date:** 2026-05-19  
**Status:** Accepted

## Context
Originally, the project was planned with a separate Node.js API and a Next.js frontend. This approach added unnecessary complexity in terms of repository management, deployment coordination, and cross-origin resource sharing (CORS).

## Decision
We have migrated everything into a unified Full-Stack Next.js Monorepo. The backend API is now built directly inside Next.js using App Router API Routes located in `src/app/api/`.

## Consequences
- **Simplified Management:** We only need to manage a single Git repository for the entire web application.
- **No CORS Issues:** Since the frontend and backend share the same origin, CORS issues are completely eliminated.
- **Streamlined Hosting:** Hosting is simplified as there is only one application to deploy.
- **Clean API Calls:** The frontend can hit the backend using relative paths (e.g., `fetch('/api/workers')`), making the code cleaner and more portable.
