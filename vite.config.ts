import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",      // Enables IPv6 and local network access
    port: 8080,       // Custom development port
  },
  plugins: [
    react(),          // Enables React + SWC
    mode === "development" && componentTagger(), // Only use tagger in dev mode
  ].filter(Boolean),  // Removes false plugins if not in dev mode
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Allow @ to reference /src
    },
  },
}));
