import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ outDir: 'dist/types' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'package/index.ts'),
      name: 'VScreenAdaptation',
      formats: ['es', 'iife', 'umd', 'cjs'],
      fileName: 'v-screen-adaptation'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
