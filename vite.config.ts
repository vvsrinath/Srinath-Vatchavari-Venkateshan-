import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const PORT = parseInt(process.env.PORT || "3000", 10);
const BASE_PATH = process.env.BASE_PATH || "/";

export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react", "react-icons"],
        },
      },
    },
  },
  server: {
    port: PORT,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
