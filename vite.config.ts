import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), ghPages()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@common-types', replacement: '/src/common-types' },
      { find: '@store', replacement: '/src/store' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
    ],
  },
})
