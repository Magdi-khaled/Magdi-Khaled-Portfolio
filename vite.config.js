import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import Components from 'unplugin-vue-components/vite';
import VueIconsResolver from '@kalimahapps/vue-icons/resolver';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
