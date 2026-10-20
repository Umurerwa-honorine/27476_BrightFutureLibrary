import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' lets the built site in /dist run from any folder (e.g. XAMPP htdocs)
export default defineConfig({
  plugins: [react()],
  base: './',
});
