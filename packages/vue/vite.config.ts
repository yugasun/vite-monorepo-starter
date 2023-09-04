import { defineConfig } from 'vite';
import Dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
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
        emptyOutDir: false,
        lib: {
            entry: 'src/index.ts',

            formats: ['es', 'cjs', 'umd'],
            fileName: 'index',
            name: 'Vms',
        },
        rollupOptions: {
            output: {
                exports: 'named',
                // Provide global variables to use in the UMD build
                globals: {
                    vue: 'Vue',
                },
            },
            // make sure to externalize deps that shouldn't be bundled
            external: ['vue'],
        },
        commonjsOptions: {
            esmExternals: ['vue'],
        },
    },
});
