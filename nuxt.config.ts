// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-06',
  devtools: { enabled: true },
  experimental: {
    asyncContext: true
  },
  modules: [
    [
      '@pinia/nuxt', {
        autoImports: ['defineStore']
      }
    ],
    '@nuxtjs/tailwindcss', '@sidebase/nuxt-session',
    '@nuxt/image', 'nuxt-og-image',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  plugins: [
    {
      src: '~/plugins/notyf.client.ts',
      mode: 'client'
    }
  ],
  imports: {
    dirs: ['stores/**', 'types']
  },
  app: {
    head: {
      title: 'Nuxt 3 sample',
      script: [
        { src: 'https://kit.fontawesome.com/b026c11a83.js', crossorigin: 'anonymous' }
      ]
    }
  },
  image: {
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    }
  },
})
