import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-crud-app/", // Replace <repository-name> with your GitHub repo name
  plugins: [react()],
});
