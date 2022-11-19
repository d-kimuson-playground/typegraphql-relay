import { resolve } from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import relay from "vite-plugin-relay"

export default defineConfig({
  plugins: [relay, react()],
  server: {
    host: "0.0.0.0",
  },
  define: {
    global: "window",
  },
  resolve: {
    alias: {
      "~": resolve(".", "src"),
    },
  },
})
