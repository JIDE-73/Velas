import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://jide-73.github.io/Velas/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
