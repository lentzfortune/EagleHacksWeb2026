# EagleHacks

Professional, responsive React frontend for the EagleHacks web site. Built with Vite + React for fast local development and modern build output.

## Table of Contents
- Project Overview
- Features
- Local Development
- Build & Deployment
- Project Structure
- Adding Sponsors / Assets
- Styling & Responsiveness
- Contributing
- License & Contact

## Project Overview

This repository contains the frontend for the EagleHacks site (folder `my-react-app`). It is a Vite + React single-page application that renders event information, sponsor listings, the hero section, gallery stats, and other content.

Tech stack
- React
- Vite
- Plain CSS modules per component (no CSS-in-JS)

## Features
- Responsive hero section with lazy-loaded hero image
- Navigation with mobile hamburger menu
- Sponsors page with placeholder logo boxes (replace with actual logos)
- About and Gallery stats components with fluid typography

## Local Development

Prerequisites
- Node.js (16+ recommended)

Install
```bash
npm install
```

Run development server (hot reload):
```bash
npm run dev
```

Open the URL printed by Vite (typically http://localhost:5173).

Notes
- If the background image is not visible, check `src/index.css` and the CSS variable `--app-bg-image`. The default path points to `src/assets/EH-background 1.png`. It's recommended to avoid spaces in asset filenames.

## Build & Deployment

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

Deploy the `dist/` directory to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Project Structure

Key files and folders
- `src/` — application source
  - `main.jsx` — app bootstrap
  - `App.jsx` — top-level layout
  - `nav.jsx` / `nav.css` — navigation
  - `SponsorPage.jsx` / `SponsorPage.css` — Sponsors section with placeholders
  - `GalleryStats.jsx` / `GalleryStats.css` — stat component
  - `AboutSection.jsx` / `AboutSection.css` — about content
  - `assets/` — images used by the app
- `public/` — static public assets (use for background images if you want root-relative paths)

## Adding Sponsors / Assets

Sponsor placeholders live in `src/SponsorPage.jsx`. Replace a placeholder box with an `<img>` element and the correct `src`:

```jsx
<div className="sponsor-box">
  <img src="/path/to/logo.png" alt="Sponsor name" />
</div>
```

Best practices
- Use optimized, appropriately sized images (SVG for logos when possible).
- Prefer placing large background images in `public/` and referencing them with an absolute path (e.g. `url('/background.jpg')`) so the build pipeline serves them reliably.
- Avoid spaces in filenames (rename `EH-background 1.png` → `eh-background-1.png`).

## Styling & Responsiveness

The project uses component-scoped CSS files. Key responsive strategies already applied:
- Fluid typography via `clamp()`
- Breakpoints for mobile/tablet/desktop using `@media` queries
- Flexible grid for sponsor logos with graceful stacking on small screens

If you need a design token system (colors, spacing, type scale), consider extracting CSS variables into `:root` in `index.css`.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-change`.
3. Make changes and test locally.
4. Commit and push, then open a PR with an explanation of changes.

Please keep changes small and focused. If you update layout or major styles, include screenshots or a short demo URL.

## License & Contact

Add your project license here (e.g., MIT). For questions, reach out to the project maintainer or open an issue in this repository.

---

If you want, I can:
- convert this README into a GitHub-ready template with badges,
- add a small CONTRIBUTING.md, or
- create a deployment preview pipeline for Netlify/Vercel.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
