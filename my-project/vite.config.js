import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html", // Add root index.html if needed
        "vet-sing-up": "./pages/vet-sing-up/index.html", // Adjust path/filename
      },
    },
  },
});
