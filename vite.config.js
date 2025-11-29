import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/personal-portfolio/",
  server: {
    host: '127.0.0.1',
    port: 3021,
    strictPort: true  
  }
});
