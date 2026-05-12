# Ente Kottakkal Web Front-End: Project Outline

## Overview
"Ente Kottakkal" (എന്റെ കോട്ടക്കൽ - My Kottakkal) is a community-focused web application designed as a digital directory and service portal for the residents of Kottakkal (a village in Vadakara, Kerala). The app is built with a mobile-first approach, featuring a clean, modern user interface.

## Tech Stack
- **Framework:** Next.js 15 with React 19
- **Styling:** Vanila CSS
- **Icons:** `lucide-react`
- **Animations:** `framer-motion`


## Features & Navigation
The application features a bottom navigation bar with the following core modules:

1. **Home (ഹോം):**
   - Hero banner welcoming users ("ഡിജിറ്റൽ ഗ്രാമത്തിന്റെ പുതിയ മുഖം" - The new face of digital village).
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
- All core UI components and screen views are currently housed within `src/app`.
- The application uses `framer-motion` for smooth page transitions between tabs.
