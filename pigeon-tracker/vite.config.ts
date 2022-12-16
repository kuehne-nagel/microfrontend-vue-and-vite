import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import federation from "@originjs/vite-plugin-federation";

const APPLICATION_PORT = 5005;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: APPLICATION_PORT,
  },
  preview: {
    port: APPLICATION_PORT,
  },
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: "pigeon-tracker",
      filename: "pigeonTracker.js",
      exposes: {
        "./PigeonTracker": "./src/App.vue",
      },
      shared: ["vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});