import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                secure: false,
            },
            '/sanctum': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                secure: false,
            },
            '/login': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                secure: false,
            },
            '/logout': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                secure: false,
            },
        }
    }
});
