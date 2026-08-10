# Hyrule Codex 🛡️🗡️

An interactive, single-page application (SPA) fan archive for *The Legend of Zelda* series. Explore every game entry, navigate the branching timelines, and dive into community-crafted lore theories — all wrapped in a parchment-and-forest fantasy UI.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Bundler & Dev Server | [Vite 5](https://vitejs.dev/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) + modular vanilla CSS |
| Icons | [Google Material Symbols Outlined](https://fonts.google.com/icons) |
| Typography | EB Garamond & Libre Franklin (via Google Fonts) |
| Data | Static JS data store (`src/data/games.js`) |

---

## 📁 Project Structure

```text
hyrule-codex/
├── public/
│   └── images/              # Game cover images & UI assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx         # Sticky nav with scroll-shrink effect & mobile menu
│   │   ├── Footer.jsx         # Global footer with branding & social links
│   │   ├── Drawer.jsx         # Mobile slide-in navigation drawer
│   │   ├── Layout.jsx         # Global page wrapper (Header + Drawer + Footer)
│   │   ├── ScrollToTop.jsx    # Scrolls to top on route change
│   │   └── game-detail/       # GameDetail subcomponents (one file per section)
│   │       ├── HeroSection.jsx
│   │       ├── StatsBar.jsx
│   │       ├── SynopsisSection.jsx
│   │       ├── MechanicsSection.jsx
│   │       ├── ProtagonistsSection.jsx
│   │       ├── VillainSection.jsx
│   │       ├── RegionsSection.jsx
│   │       ├── GallerySection.jsx
│   │       ├── TriviaSection.jsx
│   │       ├── SoundtrackSection.jsx
│   │       ├── SidebarCodexEntry.jsx
│   │       ├── SidebarChronology.jsx
│   │       ├── SidebarTheories.jsx
│   │       └── NotFound404.jsx
│   ├── pages/               # Page views
│   │   ├── Home.jsx           # Hero banner, bento navigation cards & featured lore
│   │   ├── Games.jsx          # Legend Archive grid with filter bar
│   │   ├── Timeline.jsx       # Interactive SVG branching timeline visualization
│   │   ├── Theories.jsx       # Speculative fan theories archive
│   │   └── GameDetail.jsx     # Full codex entry for a single game (slug-based route)
│   ├── data/
│   │   └── games.js           # Central data store — all game entries with full lore data
│   ├── styles/              # Modular CSS stylesheets (one per page + shared base)
│   │   ├── base.css           # Shared textures, triforce dividers, scrollbars & page-header-divider
│   │   ├── home.css           # Hero gradients & cursor glow styles
│   │   ├── games.css          # Dark forest archive styles, card hover & decorative borders
│   │   ├── timeline.css       # SVG path draw animation & floating card effect
│   │   ├── theories.css       # Papyrus theme & fan-theory card styles
│   │   └── game-detail.css    # Parchment paper background & hero image mask
│   ├── App.jsx              # React Router route configuration
│   ├── main.jsx             # React application root
│   └── index.css            # Tailwind CSS entry point
├── index.html               # Vite HTML entry point
├── tailwind.config.js       # Custom Hyrule design tokens (colors, fonts, spacing)
├── postcss.config.js        # PostCSS configuration for Tailwind
├── vite.config.js           # Vite bundler configuration
└── package.json             # Project dependencies and scripts
```

---

## 📄 Pages

### 🏠 Home (`/`)
Full-viewport hero banner with a parallax image, two CTA buttons, and a bento-style navigation grid linking to all sections. Includes a "Featured Lore" preview card row and a subtle cursor glow effect.

### 📚 Games (`/games`)
The Legend Archive — a responsive card grid of all Zelda titles, with a filter bar (console, era, release year). Each card links to the individual game codex entry. Includes a load-more pagination area.

### ⏳ Timeline (`/timeline`)
An animated, branching SVG timeline visualisation covering the full Zelda chronology: Pre-Split Era → Fallen Hero, Child Era, Adult Era → Era of the Wilds. Game nodes are parchment cards with a float animation.

### 📜 Theories (`/theories`)
The Speculative Archive — a scrollable list of fan theory cards with cover images, era dates, taxonomy tags, and excerpts.

### 🗡️ Game Detail (`/games/:slug`)
A full codex entry for each game, built from modular subcomponents:
- **Hero** — full-bleed hero image with gradient mask
- **Stats bar** — platform, year, genre, director, producer at a glance
- **Synopsis** — multi-paragraph narrative summary
- **Mechanics** — key gameplay systems
- **Protagonists & Villain** — character profiles with images
- **Regions** — notable in-game locations
- **Gallery** — image carousel
- **Trivia** — lore facts
- **Soundtrack** — notable tracks
- **Sidebar** — Codex Entry metadata, Chronology & Related Games, Related Theories

---

## 🎨 Design System

The UI uses a custom design token system defined in `tailwind.config.js`:

- **Color palette** — Material Design 3-inspired semantic tokens (`primary`, `surface`, `on-surface`, etc.) mapped to a warm Hyrule gold and deep forest green palette
- **Typography** — Two typefaces: `EB Garamond` (display & headlines) and `Libre Franklin` (labels & body)
- **Spacing** — Named scale: `xs` (4px) → `xl` (40px) with `margin-desktop` / `margin-mobile` layout tokens
- **Shared dividers** — `.triforce-divider` (parchment pages) and `.page-header-divider` (dark forest pages) — both render a gold gradient line with a centred ▲ triforce marker
- **Textures** — Per-page background textures via [Transparent Textures](https://www.transparenttextures.com/)

### Page header convention
All three dark-background pages (Games, Timeline, Theories) share a unified header style:
- **H1** → `text-primary-fixed-dim` (gold)
- **Description paragraph** → `text-inverse-on-surface` (warm off-white)
- **Separator** → `.page-header-divider` placed between h1 and description

---

## 🗃️ Data Layer

All game data lives in a single file: `src/data/games.js`.

Each entry contains:

```js
{
  slug,            // URL identifier
  title,           // Full game title
  year,            // Original release year
  platform,        // Primary platform
  platformHistory, // All releases/remasters
  category,        // e.g. 'Masterpiece', 'Classic'
  heroImage,       // Path to cover image
  tagline,
  synopsis,        // Array of paragraphs
  codexEntry,      // { publisher, genre, director, producer }
  protagonists,    // Array of character objects
  villain,         // Main antagonist object
  regions,         // Notable locations
  mechanics,       // Key gameplay systems
  gallery,         // Image paths
  trivia,          // Lore facts array
  soundtrack,      // Notable tracks
  timeline,        // { branch, eraLabel, position, ... }
  relatedGames,    // Cross-references to other entries
  relatedTheoryTags
}
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hyrule-codex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the local dev server with HMR |
| `npm run build` | Builds the production bundle |
| `npm run preview` | Locally previews the production build |

---

## 📜 License

Personal fan project — not affiliated with Nintendo. All *The Legend of Zelda* trademarks, characters, and assets belong to Nintendo Co., Ltd.
Personal fan project — not affiliated with Nintendo. All *The Legend of Zelda* trademarks and assets belong to Nintendo.