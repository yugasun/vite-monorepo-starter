import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.tsx$/],
        }),
        vueJsx({
            include: [/\.vue$/, /\.tsx$/],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./example', import.meta.url)),
        },
    },
    esbuild: {
        jsx: 'transform',
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
});
