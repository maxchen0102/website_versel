import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
      vue(),

     VitePWA({
          registerType: 'autoUpdate',
          manifest: {
            name: 'Your App Name',
            short_name: 'App',
            description: 'Your application description',
            theme_color: '#FF6B81',
            start_url: '/',
            display: 'standalone',
            background_color: '#ffffff',

          }
        })
  ],
})
