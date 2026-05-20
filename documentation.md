# Technical Documentation: Ente Kottakkal Web Front-End

Welcome to the technical documentation for **Ente Kottakkal** (എന്റെ കോട്ടക്കൽ - *My Kottakkal*). This document serves as a comprehensive guide for future developers, maintainers, and open-source contributors to understand the codebase, project architecture, user experience design system, methodologies, and setup steps.

---

## 1. Project Overview & Scope

**Ente Kottakkal** is a community-focused, mobile-first web application designed as a digital directory and service portal for the residents of Kottakkal (a municipality/panchayat in Vadakara, Kerala). 

### Key Objectives
*   **Centralize Services:** Provide local directory details (shops, clinics, local transportation, utility workers) in a single platform.
*   **Promote Community Integration:** Host localized news feeds, announcements, and a digital blood bank.
*   **Bilingual Accessibility:** Keep Malayalam as the primary language (using natural scripts) and English as helper text to maximize accessibility across all age groups.

---

## 2. Technical Stack

The front-end module is engineered with modern web technologies focused on performance, accessibility, and smooth animations:

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.2.6` (App Router) | React server rendering, static optimization, and routing |
| **React** | `19.2.4` | Component framework and state management |
| **Tailwind CSS** | `^4` | Utility-first styling configured via `@theme` variables |
| **Framer Motion** | `^12` (via `motion/react`) | Client-side transitions, micro-interactions, and visual cue animations |
| **Lucide React** | `^1.14.0` | Lightweight vector icons matching Material Design 3 guidelines |

---

## 3. Architecture & Repository Structure

Following **ADR 001**, the application is structured as a **Unified Next.js Monorepo**. This allows APIs and frontend code to share a single codebase, preventing CORS issues and simplifying hosting.

### File Directory Layout

```text
ente-kottakkal-web-front-end/
├── docs/                       # Architecture Decision Records (ADRs)
│   └── adr/
│       ├── 001-unified-nextjs-monorepo.md
│       ├── 002-firebase-infrastructure.md
│       ├── 003-docker-development-strategy.md
│       ├── 004-secure-cloud-mobile-builds.md
│       └── 005-repo-clutter-prevention.md
├── public/                     # Static assets (logos, fallback images)
└── src/
    ├── app/                    # Next.js App Router (pages & layouts)
    │   ├── 500/                # Dedicated Server Error page
    │   ├── about/              # "About the App" page
    │   ├── blood/              # Blood donor search portal
    │   ├── developer/          # Developer credentials screen
    │   ├── feedback/           # User feedback forms
    │   ├── health/             # Medical directory (clinics, pharmacy, ambulance)
    │   ├── services/           # Panchayat contacts & Bus routes list
    │   ├── shops/              # Local business directory (textiles, groceries)
    │   ├── workers/            # Laborers (carpenters, plumbers, electricians)
    │   ├── globals.css         # Styling system & Tailwind v4 theme definitions
    │   ├── layout.jsx          # Center-aligned mobile-first layout wrapper
    │   ├── loading.jsx         # Custom global loading spinner
    │   ├── not-found.jsx       # Custom bilingual 404 page
    │   ├── error.jsx           # Global error boundary component
    │   └── page.jsx            # Main Home screen (Bento service grid & News)
    ├── components/             # Reusable UI widgets
    │   └── layout/
    │       ├── BottomNavBar.jsx  # Bottom tab bar (Home, Shops, Workers, Services)
    │       └── TopAppBar.jsx     # Header bar and sidebar drawer menu
    └── data/                   # JSON/JS local mock datasets
        ├── donors.js           # Blood group donors lists
        ├── news.js             # Announcements and local news
        ├── routes.js           # Bus routes & timing listings
        ├── shops.js            # Business directories (names, contact numbers)
        └── workers.js          # Skilled labor directories (skills, ratings)
```

---

## 4. UI/UX Design System

The application adopts a custom **Material Design 3 (M3)** spec styled natively with Tailwind v4 theme tokens in [globals.css](file:///c:/Users/Public/Coding%20Projects/Ente%20Kottakkal%20Project/ente-kottakkal-web-modules/ente-kottakkal-web-front-end/src/app/globals.css).

### Color Palette Tokens
All colors are derived from a cohesive, organic color system optimized for readability and visual comfort:
*   `--color-surface` (`#fafaf4`): Light, warm surface color reducing eye strain.
*   `--color-primary` (`#154212`): Dark forest green, representing agricultural heritage.
*   `--color-primary-container` (`#2d5a27`): Lighter green tint used for cards and headers.
*   `--color-secondary` (`#944a00`): Earthy copper/orange for highlights.
*   `--color-error` (`#ba1a1a`): Warm red for critical warnings, actions, and crashes.

### Typography
*   **Body & Malayalam Script:** `"Noto Sans"` (Google Fonts) ensures clean kerning and legibility for long-form Malayalam characters.
*   **Labels & Numbers:** `"Be Vietnam Pro"` provides a technical, geometric look for metrics, phone numbers, and badges.

### Micro-Animations
We use `motion/react` (Framer Motion) for UI dynamism:
*   **Page Transitions:** Swapping views triggers a subtle slide-and-fade exit-entrance layout transition (`y: 15` -> `y: 0` -> `y: -15`).
*   **Buttons & Bento Cells:** Hover states scale items to `1.02` while click triggers `0.95` scale feedback.

---

## 5. Custom Error & Loading Handlers

Four premium system templates have been implemented to ensure a cohesive user experience under fallback conditions:

### A. 404 Page (`src/app/not-found.jsx`)
*   **Trigger:** Automatically rendered by Next.js for unmapped URLs or when `notFound()` is invoked.
*   **Features:** Floating compass animation with a red pulsing beacon.
*   **Bilingual text:**
    *   *Malayalam:* "ഈ പേജ് നിലവിലില്ല" *(This page does not exist)*
    *   *English:* "Page Not Found - The page you are looking for doesn't exist."

### B. Error Boundary (`src/app/error.jsx`)
*   **Trigger:** Catches client-side or server-side component runtime errors during lifecycle operations.
*   **Features:** Red AlertTriangle motion shake. Features a collapsible **Technical Details (സാങ്കേതിക വിവരങ്ങൾ)** CLI-style console.
*   **Recoverability:** Triggers the native React Error Boundary `reset()` callback.

### C. 500 Server Error (`src/app/500/page.jsx`)
*   **Trigger:** For direct redirection when APIs or network requests report standard internal server errors.
*   **Features:** Graphic showing a server rack with flashing status LEDs and a button to reload page variables.

### D. Global Loading Spinner (`src/app/loading.jsx`)
*   **Trigger:** Displays during Next.js Suspense boundary resolved async tasks (page-to-page navigation).
*   **Features:** Spinning circular accent track wrapped around a pulsing green core dot.

---

## 6. Infrastructure & Deployment Decisions

For more detailed decisions, consult the records under `docs/adr/`:
1.  **Managed Backend (ADR 002):** Firebase Firestore, Auth, and Storage host live database models. Contributors do not need to run database servers locally.
2.  **Docker Strategy (ADR 003):** Development runs native hot reloading via `npm run dev` to assure high speed. Production builds are validated via a multi-stage Docker configuration to prevent "works on my machine" issues.
3.  **Mobile DevOps (ADR 004):** Android keystores (`.jks`) and build keys are injected securely at run-time as encrypted environment secrets inside GitHub Actions pipelines.

---

## 7. Developer Contributor Guide

### Prerequisites
*   **Node.js:** `v20.x` or later (Recommended)
*   **NPM / NPX:** Bundled with Node

### Local Development Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/thajucp123/ente-kottakkal-web.git
    cd ente-kottakkal-web-front-end
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Duplicate `.env.example` to `.env.local` and complete Firebase SDK credential configurations:
    ```bash
    cp .env.example .env.local
    ```

4.  **Launch Local Server:**
    ```bash
    npm run dev
    ```
    Open your browser to `http://localhost:3000`.

### Building for Production
Verify your build locally before submitting Pull Requests:
```bash
npm run build
```
This tests static page pre-generation and alerts you to any syntax, imports, or bundler warnings.
