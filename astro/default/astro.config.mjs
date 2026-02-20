// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "payload/node";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

loadEnv();

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4320,
    host: true,
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
