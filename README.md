# Research Process — Presentation Deck

This is a React + Vite presentation app that showcases the "Research Process" topic suitable for academic use.

Features:
- React 18 functional components and hooks
- React Router for slide navigation
- Styled Components for styling
- Framer Motion for smooth transitions and animations
- React Icons for visuals
- Keyboard navigation, fullscreen, print-to-PDF, theme toggle, progress bar

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

Notes
- Print/export uses the browser Print dialog (choose Save as PDF).
- Presenter mode, thumbnails, and extra features can be extended; the code is modular.

File structure

See `src/` for components, hooks, context, and styles.

Running tests (headless)

The project includes a simple Playwright script to run basic UI checks.

```bash
npx playwright install
node tests/ui-test.js
```

Theme persistence

- The app stores theme preference in `localStorage` under the key `rp_theme`. The theme toggle animates for a smooth visual transition.

Committing changes

- I committed workspace changes locally. To push to a remote, add a remote URL and run `git push`.
"# Research-Deck" 
"# Research-Deck" 
"# Research-Deck" 
"# Research-Deck" 
"# Research-Deck" 
"# Research-Deck" 
