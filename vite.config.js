import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  server: {
    open: true, // Automatically open the app in the browser
    proxy: {
      '/api': 'http://localhost:5000',
     } // Proxy API requests to the backend server
  
  },

  css: {
    postcss: './postcss.config.js',  // Point to the PostCSS configuration file
  },
});
