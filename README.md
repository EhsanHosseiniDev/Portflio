# Ehsan Hosseini — Portfolio

A bilingual (English / German) personal portfolio built with **Astro**, **React + Three.js**, **Tailwind CSS**, and **MDX**. It features a cyberpunk-style dark theme, an animated 3D particle hero, project case studies, and a blog. The site is fully static and deploys for free on **GitHub Pages**.

**Live site:** https://ehsanhosseinidev.github.io/Portflio/

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Adding Content](#adding-content)
- [Internationalization](#internationalization)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- ⚡ **Static & fast** — built with Astro, ships almost zero JavaScript by default.
- 🎨 **Cyberpunk dark theme** — neon accent palette configurable in Tailwind.
- 🌐 **Bilingual** — English (default) and German, powered by Astro i18n.
- 🧊 **3D hero** — interactive particle scene using React Three Fiber + Three.js.
- 📝 **MDX content** — write projects and blog posts as MDX with typed frontmatter.
- 🗺️ **SEO ready** — automatic sitemap generation.
- 🚀 **One-click deploy** — GitHub Actions workflow builds and publishes to GitHub Pages on every push to `main`.

---

## Tech Stack

- [Astro 5](https://astro.build) — static site generator
- [React](https://react.dev) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) — 3D scene
- [Three.js](https://threejs.org) — WebGL rendering
- [Tailwind CSS](https://tailwindcss.com) — styling
- [MDX](https://mdxjs.com) — content authoring
- [TypeScript](https://www.typescriptlang.org)

---

## Prerequisites

- **Node.js 20+**
- **npm** (bundled with Node)
- A **GitHub account** (for deployment)

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The site runs at **http://localhost:4321**.

---

## Available Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the local dev server with hot reload.       |
| `npm run build`   | Build the production site into `dist/`.           |
| `npm run preview` | Preview the production build locally.             |
| `npm run astro`   | Run Astro CLI commands (e.g. `astro add`, `check`).|

---

## Configuration

The GitHub Pages URL is set in **`astro.config.mjs`**. These two values must match your GitHub username and repository name:

```js
const SITE = 'https://ehsanhosseinidev.github.io'; // https://<username>.github.io
const BASE = '/Portflio';                          // '/<repo-name>'
```

> **Important:** GitHub Pages paths are **case-sensitive**. `BASE` must exactly match the repository name (including capitalization), otherwise CSS/JS assets will return 404 on the deployed site.
>
> If you deploy a **user site** (a repository named `<username>.github.io`), set `BASE` to `'/'`.

---

## Deployment (GitHub Pages)

Deployment is fully automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). On every push to `main`, GitHub Actions installs dependencies (`npm ci`), builds the site, and publishes `dist/` to GitHub Pages.

**One-time setup:**

1. Push the repository to GitHub:

   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. In the repository, go to **Settings → Pages** and, under **Build and deployment**, set **Source** to **GitHub Actions**.

3. Push to `main`. The workflow builds and deploys automatically; the final URL appears on the same Pages settings screen.

> **Note:** `npm ci` requires `package.json` and `package-lock.json` to be in sync. If the deploy fails with an `EUSAGE` / "lock file is not in sync" error, run `npm install` locally and commit the updated `package-lock.json`.

---

## Adding Content

### Add a new project

Create MDX files under `src/content/projects/`:

```
src/content/projects/
  ├── my-new-project.mdx          ← English version (lang: "en")
  └── my-new-project.de.mdx       ← German version (lang: "de")
```

Example frontmatter:

```yaml
---
title: "Project Name"
summary: "One-line summary"
accent: "cyan"               # cyan | violet | magenta | lime
role: "Your role"
year: 2025
tech:
  - "C#"
  - ".NET"
tags: ["backend", "performance"]
featured: true
order: 1                     # lower numbers appear first
lang: "en"                   # or "de"
draft: false
---

## Overview
Your MDX content...
```

### Add a blog post

Create MDX files under `src/content/blog/`:

```
src/content/blog/
  ├── my-post.mdx
  └── my-post.de.mdx
```

Example frontmatter:

```yaml
---
title: "Post Title"
summary: "One-line summary"
publishedAt: 2026-05-21
tags: ["testing", "csharp"]
lang: "en"
draft: false
---
```

---

## Internationalization

The site is configured for **English (default)** and **German** in `astro.config.mjs`:

```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  routing: { prefixDefaultLocale: false },
}
```

- English pages live under `src/pages/` and are served at the root (`/`).
- German pages live under `src/pages/de/` and are served under `/de/`.
- UI strings (nav, hero, about, contact, etc.) are translated in `src/i18n/ui.ts`.

---

## Project Structure

```
src/
├── components/         # Astro & React components (HeroScene 3D lives here)
├── content/
│   ├── projects/       # Project case studies (MDX)
│   └── blog/           # Blog posts (MDX)
├── data/               # Static data (experience.ts, skills.ts)
├── i18n/               # UI translations (ui.ts)
├── layouts/            # BaseLayout
├── pages/
│   ├── index.astro     # English home page
│   ├── projects/       # /projects and /projects/[slug]
│   ├── blog/           # /blog and /blog/[slug]
│   └── de/             # German versions of all pages
└── styles/global.css   # Cyberpunk theme
```

---

## Customization

| What you want to change        | Where                                                        |
| ------------------------------ | ----------------------------------------------------------- |
| Neon colors                    | `tailwind.config.mjs` → `colors.neon.*`                     |
| Hero, about, contact copy      | `src/i18n/ui.ts`                                            |
| Work experience (timeline)     | `src/data/experience.ts`                                   |
| Skills                         | `src/data/skills.ts`                                       |
| Email & social links           | `src/components/Contact.astro`, `src/components/Footer.astro`|
| 3D scene                        | `src/components/HeroScene.tsx`                              |

---

## Troubleshooting

- **Deploy fails at `npm ci` with a lock-file sync error** — run `npm install` locally and commit the updated `package-lock.json`.
- **Deployed page loads but has no styling / broken assets (404)** — `BASE` in `astro.config.mjs` does not match the repository name (check capitalization).
- **Nothing deploys after a successful build** — make sure **Settings → Pages → Source** is set to **GitHub Actions**.

---

## License

MIT — free for personal use and adaptation.
