import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const dirname = path.resolve();

export default defineConfig({
  base: './',
  plugins: [dts({ rollupTypes: true })],
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(dirname, 'src') }],
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'nexon-open-api-js',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
