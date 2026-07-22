import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  base: "/portfolio-oliveira-systems/",
  plugins: [react(), cloudflare()],
});