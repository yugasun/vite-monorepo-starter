import Dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Dts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',

      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    },
    // @rollupjs/plugin-commonjs 的配置
    commonjsOptions: {
      // 修复 vue-grid-layout 中， `module.exports = require('vue)` 被编译为 `import Xr from 'vue'; module.exports = Xr` 的问题
      esmExternals: ['vue']
    }
  }
})
