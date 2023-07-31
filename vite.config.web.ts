import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import packageJson from './package.json'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    __DEV__: isDev,
    __NAME__: JSON.stringify(packageJson.name)
  },
  plugins: [react()]
})