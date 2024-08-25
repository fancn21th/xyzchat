import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/mock": {
        target: "http://localhost:4321",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/mock/, ""),
      },
    },
  },
});
