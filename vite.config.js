import { defineConfig } from "vite";
import { headers } from "./src/config/headers";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lumine-law/", // Replace <repository-name> with your GitHub repo name
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 5173, // Optional: specify the port
  },
  build: {
    rollupOptions: {
      output: {
        // Add cache busting
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
});
