import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: { loader: { ".js": "jsx" } },
  },
  server: {
    port: 5173,
    proxy: { "/api": "http://localhost:8080", "/uploads": "http://localhost:8080" },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true,
  },
});
