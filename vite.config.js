import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
      vue(),
       VitePWA({
      // 应用清单
      manifest: {
        name: 'Vite PWA',
        short_name: 'Vite',
        description: 'Vite PWA APP',
        theme_color: '#ccc',

      },
      // 注册ws方式
      injectRegister: 'auto',
      // 设置缓存资源
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,jpg,jpeg}']
      },
      //dev环境也开启pwa
      devOptions: {
        enabled: true
      }
    })
  ],
})
