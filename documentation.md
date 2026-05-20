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
    │   ├── education/          # Education Hub
    │   │   ├── institutions/   # Schools, colleges, & universities subpage
    │   │   ├── tuitions/       # Tuition & entrance coaching hubs subpage
    │   │   ├── scholarships/   # Student scholarship directories subpage
    │   │   └── notices/        # Exam timetables & deadlines subpage
    │   ├── events/             # Local events & festivals listing
    │   ├── feedback/           # User feedback forms & private listing application
    │   │   └── request-listing/# Private submission form for listings
    │   ├── health/             # Medical directory (clinics, pharmacy, ambulance)
    │   ├── jobs/               # Local Job Board (listings & post vacancy form)
    │   ├── lost-found/         # Lost & Found listings (registry & claim form)
    │   ├── news/               # Local news updates portal
    │   ├── properties/         # Real estate listings & post form
    │   ├── religious/          # Religious utilities & multi-faith directory
    │   ├── services/           # Panchayat contacts & Bus routes list
    │   ├── shops/              # Local business directory (textiles, groceries)
    │   ├── tourism/            # Tourism Hub
    │   │   ├── historical/     # Historical & Heritage spots subpage
    │   │   ├── tourist/        # Scenic & sightseeing places subpage
    │   │   ├── culture/        # Traditional and cultural venues subpage
    │   │   └── food/           # Regional dining & food joints subpage
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
        ├── education_mock.js   # Schools, coaching, scholarships mock data
        ├── events_mock.js      # Upcoming and past events mock data
        ├── jobs_mock.js        # Vacancies board mock data
        ├── lost_found_mock.js  # Lost & Found mock database
        ├── news.js             # Announcements and local news
        ├── properties_mock.js  # Real estate listings mock data
        ├── religious_mock.js   # Multi-faith directories & timings data
        ├── routes.js           # Bus routes & timing listings
        ├── shops.js            # Business directories (names, contact numbers)
        ├── tourism_mock.js     # Tourism places and highlight tags data
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

## 6. Newly Implemented Community & Utility Modules

The following features have been added to expand local utility and community interactions, using local state persistence (`localStorage`) combined with mock datasets:

### A. Lost & Found Module (`src/app/lost-found/`)
*   **Main Dashboard:** Displays reported items with text search (filtering titles, locations, and descriptions) and category filters (Documents, Electronics, Keys, Pets, Jewelry, Others).
*   **Status Toggle:** Users can switch between "Lost" (red label/beacon) and "Found" (green label/beacon) categories.
*   **Submission Form (`/lost-found/create`):** Allows users to register items with phone contact detail inputs.
*   **State Persistence:** Entries are saved locally to `localStorage` (`ente_kottakkal_lost_found`).

### B. Hyperlocal Job Board (`src/app/jobs/`)
*   **Opportunity Listings:** Shows job cards with title, company name, wage range, location, and quick phone call triggers.
*   **Posting Form (`/jobs/create`):** Employers can list part-time, full-time, temporary, or Gulf vacancies. Includes expiry date settings.
*   **State Persistence:** Entries are saved locally to `localStorage` (`ente_kottakkal_jobs`).

### C. Real Estate, Properties & Rentals (`src/app/properties/`)
*   **Dashboard Listing:** Offers listing view of rentals and sales with transaction filtering (Tabs for Rent/Sale) and category chips (Houses, Rooms/PGs, Commercial, Plot/Land).
*   **Posting Form (`/properties/create`):** Allows landlords and property owners to submit detailed listings with measurements (sqft/cents) and price.
*   **State Persistence:** Entries are saved locally to `localStorage` (`ente_kottakkal_properties`).

### D. Events, Festivals & Programs (`src/app/events/`)
*   **Read-Only Dashboard:** Interactive bulletin board of cultural, religious, arts, sports, and service camps in Kottakkal.
*   **Filtering:** Tabs toggle between upcoming events and past programs. Subtype chips allow filtering by event type.

### E. Education Directory Hub (`src/app/education/`)
*   **Grid Menu Access:** Located under the **Services (സേവനങ്ങൾ)** section of the Home screen as a full-width bento card. Opens a hub containing 4 styled cards linking to dedicated subroutes:
    *   **Schools & Colleges (`/education/institutions`):** Complete index of local schools, colleges, and major universities (Calicut University, Malayalam University). Features search bar and filter chips for Schools, Colleges, and Universities.
    *   **Tuitions & Coaching (`/education/tuitions`):** Comprehensive listings of local tutoring houses and competitive entrance exam preparation centers. Includes contact calls and subject filtering.
    *   **Scholarships (`/education/scholarships`):** Educational student welfare schemes showing eligibility requirements, value details, and application deadlines.
    *   **Announcements (`/education/notices`):** Notice board displaying exam timetables, registration dates, and reschedule alerts.

### F. Religious Utilities & Faiths Directory (`src/app/religious/`)
*   **Multi-Faith Structure:** Balanced support for Hindu, Muslim, and Christian faiths.
*   **Timings Console:** Daily timings for Muslim prayers (Fajr, Dhuhr, Asr, Maghrib, Isha), Temple darshans, and Christian Holy Masses.
*   **Worship Directory:** Contact directories of local temples (ക്ഷേത്രങ്ങൾ), mosques (മസ്ജിദുകൾ), and churches/parishes (ദേവാലയങ്ങൾ).
*   **Notices Feed:** Religious notifications and feast/festival announcements.

### G. Tourism, Culture & Heritage Hub (`src/app/tourism/`)
*   **Grid Menu Access:** Located under the **Community (കമ്മ്യൂണിറ്റി)** section of the Home screen. Opens a hub containing 4 styled cards linking to dedicated subroutes:
    *   **History (`/tourism/historical`):** Spotlight on heritage palaces (e.g. Kottakkal Kovilakam) and historical landmarks.
    *   **Sightseeing (`/tourism/tourist`):** Features local botanical gardens, scenic hills, and photo-friendly areas.
    *   **Culture (`/tourism/culture`):** Covers temple festival venues, auditoriums, and venues for traditional performance arts.
    *   **Food Spots (`/tourism/food`):** Highlights local Malabar dining spots, snack stalls, and lake-side eateries.

### H. Private Listing Submission (`src/app/feedback/request-listing/`)
*   **Admin Submission Hook:** Accessible via a banner on the Feedback screen. Residents submit details of their shops, clinics, or labor profiles.
*   **Security:** Submissions do not appear in public lists immediately; they are saved in a pending status queue awaiting administrative review (`ente_kottakkal_listing_requests`).

### I. Local News Hub (`src/app/news/`)
*   **Home Screen Feed:** Displays real-time updates and announcements. A button labeled **എല്ലാ വാർത്തകളും (All News)** triggers navigation to the dedicated news hub.
*   **Details & Engagement:** Users can search through historical news stories, browse full article descriptions, and interact using like counters.

---

## 7. Infrastructure & Deployment Decisions

For more detailed decisions, consult the records under `docs/adr/`:
1.  **Managed Backend (ADR 002):** Firebase Firestore, Auth, and Storage host live database models. Contributors do not need to run database servers locally.
2.  **Docker Strategy (ADR 003):** Development runs native hot reloading via `npm run dev` to assure high speed. Production builds are validated via a multi-stage Docker configuration to prevent "works on my machine" issues.
3.  **Mobile DevOps (ADR 004):** Android keystores (`.jks`) and build keys are injected securely at run-time as encrypted environment secrets inside GitHub Actions pipelines.

---

## 8. Developer Contributor Guide

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
