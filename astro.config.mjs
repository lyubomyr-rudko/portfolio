// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL ?? 'https://lyubomyr-rudko.github.io';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [react(), partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});
