import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Base public path when served in production
  base: mode === 'production' ? './' : '/',
  
  // Build configuration
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: mode !== 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'zustand', 'axios'],
          ui: ['framer-motion', 'react-hot-toast', 'react-icons', 'lucide-react']
        }
      }
    }
  },
  
  plugins: [
    react(),
    tailwindcss(),

  ],
}))
