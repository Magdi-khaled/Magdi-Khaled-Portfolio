import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import tailwindcss from '@tailwindcss/vite';
import Components from 'unplugin-vue-components/vite';
import VueIconsResolver from '@kalimahapps/vue-icons/resolver';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    tailwindcss(),
    Components({
      resolvers: [
        VueIconsResolver,
      ],
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
