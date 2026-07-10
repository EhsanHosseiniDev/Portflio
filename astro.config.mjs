import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update these two for your GitHub Pages deployment:
//   site: 'https://<your-username>.github.io'
//   base: '/<your-repo-name>'   (or '/' if you use a user/organization site like username.github.io)
const SITE = 'https://ehsanhosseinidev.github.io';
const BASE = '/Portflio';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    react(),
    mdx(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    ssr: {
      noExternal: ['three', '@react-three/fiber', '@react-three/drei'],
    },
  },
});
