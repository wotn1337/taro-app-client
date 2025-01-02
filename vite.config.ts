import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    preview: {
      host: env.VITE_PREVIEW_HOST,
      port: Number(env.VITE_PREVIEW_PORT),
    },
  };
});
