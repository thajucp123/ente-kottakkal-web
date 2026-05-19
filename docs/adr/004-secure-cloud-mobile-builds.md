# ADR 004: Secure Cloud Mobile Builds

**Date:** 2026-05-19  
**Status:** Accepted

## Context
The project includes a Flutter user app and a native Kotlin admin app. These apps require secure management of production keystores and automated build processes to ensure consistency and security.

## Decision
We use GitHub Actions for our mobile build pipeline. Production `.jks` keystores and `key.properties` files are blacklisted in `.gitignore` and `.dockerignore`. Instead, they are stored as encrypted GitHub Secrets, decoded during the build process, and used to compile the apps.

## Consequences
- **Enhanced Security:** Sensitive signing keys never touch the Git repository.
- **Automated Workflow:** Pushing to the `main` branch automatically triggers the build process.
- **Parallel Output:** The workflow generates both official Google Play Store `.aab` bundles and shareable test `.apk` files simultaneously.
- **Accessibility:** Build artifacts are easily downloadable from the GitHub Actions panel.
