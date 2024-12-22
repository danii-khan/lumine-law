import { defineConfig } from "vite";
import { headers } from "./src/config/headers";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip", // or 'brotliCompress'
      ext: ".gz", // extension to add to compressed files
      threshold: 10240, // only compress files bigger than this (in bytes)
      deleteOriginFile: false, // keep the original uncompressed file
      verbose: true, // log compression results
      disable: false, // disable compression during development
    }),
  ],
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
