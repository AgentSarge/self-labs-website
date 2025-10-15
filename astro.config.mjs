import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  // add your domain name here
  site: 'https://selflabs.com',
  compressHTML: true,
  integrations: [sitemap()]
});