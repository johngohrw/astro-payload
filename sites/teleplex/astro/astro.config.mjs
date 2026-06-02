// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "payload/node";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

loadEnv();

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Allow Cloudflare Tunnel (and any reverse proxy) to forward traffic.
      // In dev mode this is safe. Remove for production builds.
      allowedHosts: [".john.shiksha"],
    },
  },
});
