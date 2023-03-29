// https://nuxt.com/docs/api/configuration/nuxt-config
import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Bem-vindo ao site do casamento de Tatiana e Felipe',
      titleTemplate: chunk => `${chunk} | aaaaaaaaa`,
      meta: [
        ...meta,
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'O site do casamento de Tatiana e Felipe' },
        {
          hid: 'description',
          name: 'description',
          content: 'O site do casamento de Tatiana e Felipe'
        },
        { property: 'og:image:width', content: '740' },
        { property: 'og:image:height', content: '300' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'twitter:site', content: '@felipecss' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:5000',
      pixKey: 'contato@casamentotafe.com',
      mapboxKey: 'pk.eyJ1IjoiZmVsaXBlY3NzIiwiYSI6ImNsZmc0ZjczZTA0azMzcXMzYTBnaXFzYjcifQ.QWiOGCNiz6IdYZuXct4A-w'
    }
  },
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],
  imports: {
    dirs: ['stores'],
  },
  modules: [
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'definePiniaStore', 'acceptHMRUpdate'],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt'
  ],
  image: {
    dir: 'public'
  },
  plugins: [
    '~/plugins/vg-countdown.js',
    { src: "@/plugins/aos", mode: "client" }
  ]
})
