# ADR 003: Docker & Development Strategy

**Date:** 2026-05-19  
**Status:** Accepted

## Context
There is a need to balance high development productivity with the assurance that code will run correctly in a production environment. 

## Decision
Our strategy is split into two phases:
1. **Day-to-Day Coding:** Developers run `npm run dev` natively on their machines to benefit from instant (50ms) Hot Reloading.
2. **Production Verification:** We use a high-performance Multi-Stage Dockerfile at the project root as a final sanity check before pushing code to GitHub.

## Consequences
- **High Productivity:** Native execution ensures the fastest possible feedback loop during development.
- **Consistency:** Dependencies are strictly locked via `package-lock.json`, minimizing "works on my machine" issues.
- **Reliable Deploys:** Verifying the build inside a Docker container locally ensures that it matches production conditions and will deploy flawlessly.
- **Simplified Infrastructure:** Because Firebase handles the database, we don't need complex `docker-compose` setups for local development.
