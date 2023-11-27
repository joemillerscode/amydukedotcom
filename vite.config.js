import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about/index.html'
        // Add more pages as needed
      },
      output: {
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "img/[name].[ext]"
      }
    }
  }
})