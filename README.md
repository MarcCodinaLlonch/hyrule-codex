# Hyrule Codex 🛡️🗡️

An interactive, single-page application (SPA) hub for *The Legend of Zelda* series. Explore the games, branching timelines, and community theories through a visual, parchment-inspired fantasy UI.

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) (npm-based custom theme)
- **Icons**: [Google Material Symbols Outlined](https://fonts.google.com/icons)
- **Typography**: EB Garamond & Libre Franklin (via Google Fonts)

---

## 📁 Project Structure

```text
hyrule-codex/
├── public/              # Static public assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.jsx   # Unified top navigation with scroll shrink
│   │   ├── Footer.jsx   # Global footer
│   │   ├── Drawer.jsx   # Mobile navigation drawer
│   │   └── Layout.jsx   # Global page wrapper with shared drawer state
│   ├── pages/           # Page views
│   │   ├── Home.jsx       # Landing page & bento showcase
│   │   ├── Games.jsx      # Legend archive grid & filter system
│   │   ├── Timeline.jsx   # Interactive branching timeline visualization
│   │   ├── Theories.jsx   # Speculative fan theories archive
│   │   └── GameDetail.jsx # Detailed game codex entry
│   ├── styles/          # Modular CSS stylesheets
│   │   ├── base.css       # Shared parchment textures, gold relief & scrollbars
│   │   ├── home.css       # Hero gradients & home styles
│   │   ├── games.css      # Dark forest parchment archive styles
│   │   ├── timeline.css   # Dark matter backdrop & SVG path animations
│   │   ├── theories.css   # Papyrus theme & theory cards
│   │   └── game-detail.css# Vintage paper & hero masks
│   ├── App.jsx          # React Router entry configuration
│   ├── main.jsx         # React application root
│   └── index.css        # Global Tailwind CSS entry
├── index.html           # Vite HTML entry point
├── tailwind.config.js   # Custom Hyrule design tokens (colors, fonts, spacing)
├── postcss.config.js    # PostCSS configuration for Tailwind
├── vite.config.js       # Vite bundler configuration
└── package.json         # Project dependencies and scripts
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

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

4. Open your browser and navigate to `http://localhost:5173/`.

### Available Scripts

- `npm run dev` — Starts the local dev server with Hot Module Replacement (HMR).
- `npm run build` — Builds the application for production.
- `npm run preview` — Locally previews the production build.

---

## 📜 License

Personal fan project — not affiliated with Nintendo. All *The Legend of Zelda* trademarks and assets belong to Nintendo.