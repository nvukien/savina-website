import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      config: path.resolve(__dirname, 'src/config'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      i18n: path.resolve(__dirname, 'src/i18n'),
      layout: path.resolve(__dirname, 'src/layout'),
      pages: path.resolve(__dirname, 'src/pages'),
      theme: path.resolve(__dirname, 'src/theme'),
      utils: path.resolve(__dirname, 'src/utils'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
});
