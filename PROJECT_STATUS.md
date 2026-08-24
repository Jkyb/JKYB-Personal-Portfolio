# Kent Portfolio — Project Status / Handoff Notes

> Read this first in any new session to pick up exactly where things left off.
> Last updated: 2026-08-24 (session 3: GitHub push + copy-to-clipboard contact fallback)

**Repo:** https://github.com/Jkyb/JKYB-Personal-Portfolio (pushed by Kent directly via
plain `git remote add` + `git push`, not the `gh` CLI). Branch: `main`.

## What this is

A frontend-only personal portfolio for **Kent** (handle/brand: **JKYB**), built for a
professional job application (specifically a **Website & Growth Manager** role).
Positioning: "Developer & Creative Technologist" — web dev, interactive apps, data
viz, game dev, multiplayer systems, 3D modelling. Based in the Philippines.

**Do not** position Kent as an SEO/e-commerce/Shopify/AI expert — that was an explicit
constraint from the original brief.

## Tech stack

- React 19 + Vite 8 (JS, no TypeScript)
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin — theme tokens live in
  `src/index.css` under `@theme`, **not** a `tailwind.config.js` file)
- Framer Motion for animation
- React Router v7 (`react-router-dom`) for `/` and `/work/:id`
- No backend, no database, no auth — intentionally frontend-only for V1

## How to run

```
cd kent-portfolio
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # preview the build
```

Build has been verified working as of this writing (`npm run build` succeeds,
`diagnostics` clean except one harmless Tailwind v4 `@theme` CSS-linter false positive
in `src/index.css`).

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx           Sticky nav, logo + "JKYB" wordmark, mobile hamburger
│   ├── Button.jsx           Shared button (renders <a> if href given, else <button>)
│   ├── ProjectCard.jsx      Standard featured-project card (used for projects 2-4)
│   ├── FeaturedHeroCard.jsx Oversized card used ONLY for the #1 featured project
│   │                        (currently Mana Makawat) — largest visual treatment
│   ├── ExperimentCard.jsx   Small card for the "Experiments" section
│   ├── ImagePlaceholder.jsx Renders real <img> if `src` given, else a clearly
│   │                        labeled placeholder block (label + note text)
│   ├── Lightbox.jsx         Full-screen image viewer w/ keyboard nav, used for
│   │                        project detail "album" galleries
│   ├── SectionKicker.jsx    Small numbered/eyebrow label above section headings
│   ├── Footer.jsx           Minimal footer (still says "KENT" — see Known
│   │                        Inconsistencies below)
│   └── ScrollManager.jsx    Scrolls to top on route change, or to a hash target
│                            (e.g. `/#work`) on navigation
├── sections/                One file per homepage section, composed in pages/Home.jsx
│   ├── Hero.jsx              "I build digital experiences." + profile photo
│   ├── FeaturedProjects.jsx  Renders FeaturedHeroCard + ProjectCard list from data
│   ├── Experiments.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── CreativeWork.jsx      AI-Assisted Development blurb + Beyond Development
│   │                         (music/YouTube) — combined into one section
│   └── Contact.jsx
├── data/                     ALL content lives here — no hardcoded copy in components
│   ├── projects.js           Array of 4 featured projects (see shape below)
│   ├── experiments.js        Array of 3 small experiments
│   ├── skills.js             Skill groups (no percentages, by design)
│   ├── social.js             Email / GitHub / LinkedIn / YouTube / CV link
│   └── images/                Actual project images live here (see below)
├── pages/
│   ├── Home.jsx              Composes all sections for `/`
│   └── ProjectDetail.jsx     Case-study page for `/work/:id`, includes gallery +
│                             Lightbox + "next project" link
├── App.jsx                   Router + persistent Navbar/Footer shell
├── main.jsx                  Entry point, wraps App in BrowserRouter
└── index.css                 Tailwind import + @theme tokens + base styles
```

### Data-driven architecture (important — do not regress this)

`src/data/projects.js` exports a `projects` array, each shaped like:

```js
{
  id: "mana-makawat",
  title: "...",
  category: "...",
  year: "...",
  description: "...",       // short, used on cards
  longDescription: "...",   // longer, used on detail page
  technologies: [...],
  highlights: [...],        // bullet list on detail page
  image: importedImage | null,
  gallery: [importedImage, ...],  // empty array if none
  links: { demo: url | null, source: url | null },
  featured: true,
}
```

This is intentionally plain JS data (no framework coupling) so it can be swapped for a
Supabase/PostgreSQL fetch later **without changing any component code** — components
just need `projects` (or an async equivalent) to iterate over the same shape.

`getProjectById(id)` and `featuredProjects` are also exported as helpers.

Same pattern for `src/data/experiments.js` (simpler shape, no `longDescription`/
`highlights`/`featured`).

## Images — current state

User has supplied real images, placed under `src/data/images/`:

```
src/data/images/
├── logo.jpg                       → Navbar logo (see Known Inconsistencies)
├── profile.jpg                    → Hero section profile photo
├── fundraising_visualizer.png     → Fundraising Visualizer main image
├── sigs.png                       → School Information System main image
├── mana_makawat/
│   ├── mana_makawat_home.jpg      → main image for Mana Makawat
│   └── mana_makawat_01-04.jpg     → gallery/album for Mana Makawat
├── psu_goa_3D_model/
│   ├── PSU_GOA_3D_01.png          → main image for PSU Campus 3D
│   └── PSU_GOA_3D_02-08.png       → gallery/album (7 images, incl. a real AR
│                                    tablet photo as 08)
└── experimentalprojects/
    ├── typing_game.png            → Typing Game experiment
    ├── random_bible_verse.png     → Random Verse Generator experiment
    └── hand_tracking.png          → Hand Tracking experiment
```

All of these are imported directly in `src/data/projects.js` / `experiments.js` as ES
module imports (Vite handles bundling/hashing). **To add a new image to an existing
project**: import it at the top of the relevant data file, then assign it to `image`
or push it into `gallery`.

All placeholders have now been filled in with real images — every project and
experiment has at least a main image.

### Image optimization already done

The original images (especially the PSU renders) were huge — up to 1.2–1.35MB each
PNG. They were resized (max width 1920px) and recompressed in place using a
temporary, one-off `sharp` script (installed via `npm install --no-save sharp`, run,
then `npm uninstall sharp` — it is **not** a project dependency, this was a one-time
pass). Filenames and import paths were preserved, only the file bytes changed.
Results: PSU pngs dropped to ~230–340KB each, `fundraising_visualizer.png` 510KB→70KB,
etc. If more large images get added later, repeat that same approach (temp-install
sharp, resize to ~1920px max width, `png({palette:true, quality:82})` for PNGs or
`jpeg({quality:82, mozjpeg:true})` for JPEGs, then uninstall sharp again) rather than
adding an image-optimization library as a permanent dependency.

## Content status (what's real vs. placeholder)

### `src/data/social.js`
```js
email: "joelkentybruzo@gmail.com"        // real
github: "https://github.com/Jkyb"        // real
linkedin: "https://www.linkedin.com/in/joel-kent-bruzo-175886301/" // real
youtube: "https://www.youtube.com/@JKYB2.0" // real
cv: null                                  // STILL MISSING — no CV file/link yet
```

### Projects — links status
- **Mana Makawat**: demo = `https://jkyb.itch.io/mana-makawat` (real), source = null
- **Fundraising Visualizer**: demo = live Vercel deployment URL (real, updated since last
  note), source = null
- **PSU Campus 3D**: demo = Sketchfab model URL (real), source = null
- **School Information System**: no links (local desktop app, expected)

## Contact method — decision made

Considered a proper contact form via Formspree or EmailJS, but decided against it as
unnecessary complexity for a simple portfolio. **Current approach is final for now:**
a `mailto:` link ("Say Hello" button) plus a copy-to-clipboard fallback ("Copy Email"
button + inline copy icon next to the email address in the Contact section), so
visitors without a configured email client can still grab the address. Implemented via
`src/hooks/useCopyToClipboard.js`. Do not re-suggest a contact form unless Kent brings
it up again.

## Known inconsistencies / things to double check with Kent

1. **Navbar branding**: Kent personally edited the navbar wordmark from "KENT" to
   "JKYB" (his handle, matches GitHub/YouTube). The **Footer** still says "KENT" —
   this was left as-is since it matches the original brief and wasn't explicitly
   asked to change. Worth asking Kent if he wants these consistent (both "JKYB" or
   both "KENT").
2. **`logo.jpg` content**: This file is not a typical logo/wordmark — it's a
   black-and-white typographic graphic reading "I am SAVED / All by Grace / All for
   God's Glory / All because of His Love" (a Christian faith graphic, styled as
   text-in-a-cross-shape). It's currently used as a small circular badge next to
   "JKYB" in the navbar. This was flagged to Kent already but not yet resolved —
   confirm whether this is intentional personal branding or the wrong file was
   dropped in.
3. **CV**: still `null` everywhere (Navbar, Hero, Contact all show "TODO: Add CV" /
   disabled button). Needs an actual file or hosted link.

## Design system reference

- Colors (Tailwind theme tokens in `src/index.css`):
  `background #F5F3EE`, `ink #171717`, `muted #6B6B6B`, `accent #FF5A36`,
  `accent-light #FFE3DC`. Use as `bg-background`, `text-ink`, `text-muted`,
  `text-accent` / `bg-accent`, `bg-accent-light`.
- Fonts: `font-heading` = Space Grotesk (headings), `font-body` = Inter (body,
  default). Loaded via Google Fonts `<link>` in `index.html`.
- Aesthetic: editorial/creative-agency, NOT hacker/terminal/neon-green/glassmorphism.
  Accent color used sparingly (buttons, links, numbers, small labels).
- Reduced motion respected globally via `@media (prefers-reduced-motion: reduce)` in
  `index.css`.

## What's already complete (V1 + first content pass)

- [x] Full homepage: Hero, Featured Projects (4), Experiments (3), About, Skills,
      Creative Work (AI-assisted + Beyond Development), Contact
- [x] Sticky responsive navbar w/ logo + mobile hamburger menu
- [x] Project detail pages (`/work/:id`) with gallery + lightbox + next-project link
- [x] All 4 featured projects wired with real images/galleries
- [x] All 3 experiments wired with real images
- [x] Pushed to GitHub, prepped for Vercel (`vercel.json` + README deploy notes)
- [x] Navbar logo + Hero profile photo added
- [x] Real social links wired in except CV
- [x] SEO meta tags, OG tags, favicon, semantic headings in `index.html`
- [x] Reduced-motion support, focus-visible states, alt text throughout
- [x] Image optimization pass done (see above)
- [x] Production build verified clean (`npm run build`)
- [x] Copy-to-clipboard email fallback added to Contact section (see above);
      EmailJS/Formspree contact form considered and declined as overkill for now

## Suggested next steps (not yet done — pick up here)

1. Get Kent a **CV file/link** and wire it into `src/data/social.js` (`cv: null`
   still). LinkedIn URL is already resolved.
2. Resolve the `logo.jpg` question (item #2 above) — replace with an actual logo mark
   if the current file was a mistake.
3. Decide on Navbar vs Footer branding consistency ("JKYB" vs "KENT").
4. ~~Get a screenshot for School Information System and an image for Hand Tracking~~ —
   done. All projects/experiments now have real images.
5. Optional polish (not required for V1, only if Kent wants to go further):
   - OG image (`/og-image.png`) referenced in `index.html` doesn't exist yet — either
     add a real one or remove the meta tags referencing it.
   - Contact form via EmailJS/Formspree: explicitly declined by Kent, do not
     re-suggest unless he brings it up again (see "Contact method" section above).
6. When ready to move projects to a database (Supabase/PostgreSQL was mentioned as a
   future option): replace the static `projects` array in `src/data/projects.js` with
   an async fetch, keeping the exact same object shape so `ProjectCard`,
   `FeaturedHeroCard`, and `ProjectDetail` don't need to change.

## Deployment target

Vercel. `vercel.json` is already in the repo (framework: vite, build command
`npm run build`, output directory `dist`, SPA rewrite so `/work/:id` resolves
correctly on refresh/direct load). Code is pushed to GitHub at
https://github.com/Jkyb/JKYB-Personal-Portfolio.

**Not yet confirmed:** whether the repo has actually been imported/connected in the
Vercel dashboard and deployed live. If picking this up fresh, check with Kent whether
a live URL already exists, and if not, walk him through importing the repo at
https://vercel.com/new (see README.md "Deployment" section for the exact steps).
