import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your application description',
        theme_color: '#FF6B81',
        start_url: './',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: '/img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/img/icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: '/img/icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: '/img/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: '/img/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: '/img/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: '/img/icons/msapplication-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/img/icons/safari-pinned-tab.svg',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 年
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
})