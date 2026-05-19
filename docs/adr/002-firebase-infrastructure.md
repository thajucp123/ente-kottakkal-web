# ADR 002: Firebase Infrastructure

**Date:** 2026-05-19  
**Status:** Accepted

## Context
The application requires a robust database, authentication system, and file storage. Managing local instances of traditional databases like MongoDB or PostgreSQL can be time-consuming and complex for development and production environments.

## Decision
We are using Firebase (Firestore for the database, Firebase Auth for authentication, and Firebase Storage for file storage) as our primary infrastructure.

## Consequences
- **Managed Service:** Firebase is a fully-managed cloud service, removing the burden of hosting or configuring database engines.
- **Simplified Development:** Developers don't need to run local database containers or services on their machines.
- **Rapid Prototyping:** Firebase's ease of use allows for faster development and scaling.
