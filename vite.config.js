// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Development: '/', Production (GitHub Pages): '/ShigersPage/'
  base: process.env.NODE_ENV === 'production' ? '/ShigersPage/' : '/',

  // Optional: stricter asset handling / path behavior
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  publicDir: 'public',
})

