import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  server: {
    host: true, // <- allow external access (important for tunneling)
    port: 4000, // or whatever you're using
    strictPort: true,
    allowedHosts: ["secretary-indiana-apollo-checked.trycloudflare.com"],
    // <- allow all domains (for dev use only)
  },
});
