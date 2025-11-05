import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/react-js-jsx-and-css-mastering-front-end-development-McAyany/', // ✅ must be added for GitHub Pages deployment
})
