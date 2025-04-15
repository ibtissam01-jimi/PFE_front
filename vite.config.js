import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias '@' pour pointer vers 'src'
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    }
  }
})




