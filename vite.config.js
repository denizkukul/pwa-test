import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      srcDir: 'src',
      filename: 'sw.js',
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^index.html$/, /^main.jsx$/]
      },
      workbox: {
        globPatterns: ['**/*.{jsx,js,css,html,ico,png,svg}'],
        clientsClaim: true,
        // runtimeCaching: [{
        //   urlPattern: ({ url }) => url.origin === "https://pwa-test-59a03-default-rtdb.europe-west1.firebasedatabase.app",
        //   handler: 'CacheFirst',
        //   options: {
        //     cacheName: 'blogs-cache',
        //   },
        // }]
      },
      strategies: "injectManifest",
      manifest: {
        "name": "Blog App",
        "short_name": "PWA BLOG",
        "icons": [
          {
            "src": "./chat.svg",
            "purpose": "maskable any",
            "sizes": "any"
          }
        ],
        "start_url": "./index.html",
        "display": "standalone",
        "orientation": "portrait-primary",
        "background_color": "#fff",
        "theme_color": "#3f51b5",
        "description": "Blog App as PWA",
        "dir": "ltr",
        "lang": "en-US"
      }
    })
  ],

  build: {
    // devOptions: {
    //   enabled: true
    // },
    // minify: false,
    // outDir: "build"
  }
});
