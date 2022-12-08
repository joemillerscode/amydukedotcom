import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: "[name].[hash].js",
                chunkFileNames: "[name].[hash].js",
                assetFileNames: "img/[name].[ext]"
            }
        }
    }
})