// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "payload/node";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

loadEnv();

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
