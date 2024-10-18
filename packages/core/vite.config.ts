// import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path, { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(), // css
    dts({
      // d.ts
      include: ["src/components"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components"),
      fileName: (format) => `core.${format === "es" ? "js" : "cjs"}`, // This controls the output file name
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"], // make sure to exclude react from the bundle
      output: {
        globals: {
          // provide global variable names for the external imports
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
