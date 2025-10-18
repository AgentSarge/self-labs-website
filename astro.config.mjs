import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  // add your domain name here
  site: 'https://self-labs.io',
  compressHTML: true,
  integrations: [sitemap()]
});