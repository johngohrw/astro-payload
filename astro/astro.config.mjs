// @ts-check
import { defineConfig } from "astro/config";

import { loadEnv } from "payload/node";

import react from "@astrojs/react";

loadEnv();

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
});
