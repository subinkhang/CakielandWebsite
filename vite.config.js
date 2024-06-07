import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'public/frontend/css/style.css'
            ],
            refresh: true,
        }),
    ],
});
