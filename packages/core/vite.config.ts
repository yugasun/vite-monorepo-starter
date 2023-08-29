import Dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Dts({
            entryRoot: 'src',
            copyDtsFiles: true,
            tsconfigPath: './tsconfig.json',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        target: 'esnext',
        cssCodeSplit: false,
        minify: false,
        emptyOutDir: true,
        lib: {
            entry: 'src/index.ts',

            formats: ['es', 'cjs'],
            fileName: 'index',
        },
        rollupOptions: {
            output: {
                exports: 'named',
            },
        },
        commonjsOptions: {
            esmExternals: ['vue'],
        },
    },
});
