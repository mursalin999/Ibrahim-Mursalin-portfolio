# Ibrahim Mursalin — Personal Portfolio

Personal portfolio website for **Ibrahim Mursalin** (`https://ibrahimmursalin.pro.bd`) — Independent Student Researcher, Graphic Designer, and Systems Developer based in Mymensingh, Bangladesh.

## Tech Stack

- **JavaScript (ESNext / JSX)** — React 18 SPA (no TypeScript)
- **Vite 5** (`@vitejs/plugin-react-swc`)
- **Tailwind CSS** + **shadcn/ui** (Radix UI primitives)
- **Framer Motion** & **Three.js / React Three Fiber** (`SignalField`)
- **React Router DOM v6** & **React Helmet Async**

## Project Structure

- `src/data/achievements.js` — Structured data for featured achievements, previous recognitions, and the chronological Achievement Image Gallery timeline.
- `src/components/AchievementCard.jsx` — Reusable editorial achievement card component.
- `src/pages/Index.jsx` — Homepage with Signal Field hero, `/now`, Research Interests, About, Areas of Work, Achievements preview, Journey strip, Flagship Research (`DesignLens`), Social Impact (`Bay Sentinel`), Publications, Philosophy, Goals, Chess, and Contact.
- `src/pages/Achievements.jsx` — Recognition & Achievements overview page.
- `src/pages/AchievementDetail.jsx` — Detailed achievement views (`/achievements/:id`).
- `src/pages/AchievementGallery.jsx` — Dedicated chronological grid-based Achievement Image Gallery (`/achievements-gallery`) using reusable `AchievementCard` components with year filters, full-size lightbox view, and support for image placeholders.
- `src/pages/Portfolio.jsx`, `src/pages/Development.jsx`, `src/pages/ResearchPage.jsx`, `src/pages/Journey.jsx` — Dedicated discipline & journey pages.

## Adding Certificates & Event Photographs

Gallery photographs and certificate scans are stored in `public/assets/aistudio/` (and mapped in `achievementGalleryTimeline` inside `src/data/achievements.js`). Entries with `image: null` automatically render a clean editable placeholder card.

## Local Development

```sh
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev
```

## Build & Deployment

```sh
# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Run linter and tests
npm run lint
npm test
```

Deploy the `dist/` directory to any static hosting provider with SPA fallback routing configured to serve `index.html`.
