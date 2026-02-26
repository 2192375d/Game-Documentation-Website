import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@datatypes': path.resolve(__dirname, 'src/datatypes'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
    }
  },
})
