# ADR 005: Repo Clutter Prevention

**Date:** 2026-05-19  
**Status:** Accepted

## Context
Temporary log files, system-specific files, and crash reports can easily clutter a repository, bloating the Git history and potentially leaking sensitive or irrelevant information.

## Decision
We have implemented a strict `.gitignore` policy, including a global `*.log` catch-all safety net.

## Consequences
- **Clean History:** Standard system logs and temporary files (like Java/Gradle crash files `hs_err_pid*.log`) are never tracked.
- **Reduced Bloat:** The repository remains lean and focused only on source code and necessary configuration.
- **Safety:** Minimizes the risk of accidentally committing temporary files that might contain local path information or other metadata.
