# Kent — Developer & Creative Technologist

Personal portfolio for Kent (JKYB) — a frontend-only React + Vite site showcasing web
development, interactive applications, data visualisation, game development, and 3D
work.

Live status notes for ongoing work live in [`PROJECT_STATUS.md`](./PROJECT_STATUS.md)
— read that first if you're picking this project back up.

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Framer Motion](https://motion.dev/) for animation
- [React Router](https://reactrouter.com/) for `/` and `/work/:id`

No backend, database, or authentication — content lives in `src/data/*.js` as plain
structured data, designed to be swapped for a Supabase/PostgreSQL-backed fetch later
without changing component code.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the local dev server           |
| `npm run build`    | Production build to `dist/`          |
| `npm run preview`  | Preview the production build locally |
| `npm run lint`     | Run ESLint                           |

## Project structure

```
src/
├── components/   Shared UI building blocks (Navbar, Button, ProjectCard, etc.)
├── sections/     One file per homepage section (Hero, FeaturedProjects, etc.)
├── data/         All content: projects.js, experiments.js, skills.js, social.js,
│                 and the images/ referenced by them
├── pages/        Home.jsx and ProjectDetail.jsx (routed via react-router-dom)
├── App.jsx       Router + persistent Navbar/Footer shell
└── main.jsx      Entry point
```

## Deployment

This project deploys to [Vercel](https://vercel.com) with zero configuration beyond
what's in `vercel.json` (SPA rewrites so client-side routes like `/work/:id` resolve
correctly on refresh/direct load).

To deploy:

1. Import this repository in the [Vercel dashboard](https://vercel.com/new), or run
   `vercel` from the project root with the [Vercel CLI](https://vercel.com/docs/cli).
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory:
   `dist`. (Vercel auto-detects these, but they're set explicitly in `vercel.json`.)
