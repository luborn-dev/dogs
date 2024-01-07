import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const base = process.env.NODE_ENV === "production" ? "/dogs-web-app/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react(), svgr()],
});
