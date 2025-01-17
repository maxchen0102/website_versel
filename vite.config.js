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
        name: '您的應用名稱',
        short_name: '短名稱',
        theme_color: '#ffffff',
        display: 'standalone', // 這會隱藏瀏覽器的網址列
        start_url: '/'
      }
    })
  ],
})
