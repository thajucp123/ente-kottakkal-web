# Ente Kottakkal Web Front-End: Project Outline

## Overview
"Ente Kottakkal" (എന്റെ കോട്ടയ്ക്കൽ - My Kottakkal) is a community-focused web application designed as a digital directory and service portal for the residents of Kottakkal (a municipality/panchayat in Kerala). The app is built with a mobile-first approach, featuring a clean, modern user interface.

## Tech Stack
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **Icons:** `lucide-react`
- **Animations:** `motion` (Framer Motion)
- **Backend/API (if any):** Mentions Google GenAI SDK (`@google/genai`) and Express in dependencies, indicating potential AI integrations or a lightweight backend server.

## Features & Navigation
The application features a bottom navigation bar with the following core modules:

1. **Home (ഹോം):**
   - Hero banner welcoming users ("ഡിജിറ്റൽ ഗ്രാമസഭയുടെ പുതിയ മുഖം" - The new face of digital grama sabha).
   - Alert banners for important community announcements (e.g., water supply interruptions).
   - Quick access grid (Bento box style) for jumping to Shops, Blood Bank, Workers, and Health Services.
   - News Feed highlighting recent local updates.

2. **Shops (കടകൾ):**
   - A directory of local businesses (Supermarkets, Textiles, Hardware, etc.).
   - Includes search functionality and category filters.
   - Displays shop names, locations, categories, and a quick-call button.

3. **Workers (തൊഴിലാളികൾ):**
   - A directory of local skilled laborers (Plumbers, Electricians, Carpenters, etc.).
   - Shows worker profiles with ratings, review counts, current availability status, and options to call or message them.
   - Includes search and profession-based filtering.

4. **Services & Contacts (സേവനങ്ങൾ):**
   - **Emergency Numbers:** Quick access to Panchayat, Police, Fire Force, and Hospitals.
   - **Bus Timings:** Information on local bus routes, departure times, destinations, and bus types (e.g., KSRTC, Private) with search functionality.

5. **Blood Bank (ബ്ലഡ് ബാങ്ക്):**
   - A localized blood donor directory.
   - Search and filter donors by blood group (O+, A-, etc.).
   - A call-to-action to encourage new users to register as blood donors.

## Architecture
- All core UI components and screen views are currently housed within `src/App.tsx`.
- The application uses `framer-motion` for smooth page transitions between tabs.
- The design heavily relies on custom Tailwind theme tokens (e.g., `bg-surface-container`, `text-on-primary-container`) suggesting a comprehensive design system (likely Material Design 3 inspired).
