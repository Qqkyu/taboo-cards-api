import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [netlify(), react(), tailwind()],
  output: "server",
  outDir: "../dist",
});
