import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        notFound: resolve(__dirname, 'public/404.html')
      }
    }
  },
  server: {
    fs: {
      // Allow serving files from one level up (to access /src)
      allow: ['..']
    }
  }
});
