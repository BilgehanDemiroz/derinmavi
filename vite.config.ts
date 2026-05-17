import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tanstackStart(), tailwindcss(), tsconfigPaths()],
  esbuild: {
    jsx: "automatic",
  },
  ssr: {
    noExternal: ["@tanstack/react-router", "@tanstack/react-query"],
  },
});
