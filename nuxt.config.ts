// https://nuxt.com/docs/api/configuration/nuxt-config
import getSiteMeta from './utils/getSiteMeta'

const meta = getSiteMeta()

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Bem-vindo ao site do casamento de Tatiana e Felipe | 06 de agosto de 2023',
      meta: [
        ...meta,
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'O site do casamento de Tatiana e Felipe' },
        { property: 'og:image:width', content: '740' },
        { property: 'og:image:height', content: '300' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'twitter:site', content: '@felipecss' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      script: [
        {
          src: 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.1/mapbox-gl-directions.js',
          body: true
        },
        // {
        //   hid: 'getSiteMeta',
        //   innerHTML: `window.getSiteMeta = ${getSiteMeta.toString()}`
        // }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.1/mapbox-gl-directions.css',
          body: true
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL ||'http://localhost:3000',
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
    '@nuxtjs/robots',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'definePiniaStore', 'acceptHMRUpdate'],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
    ['@funken-studio/sitemap-nuxt-3', { generateOnBuild: true }]
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'G-4YRSE1WP17'
    }]
  ],
  image: {
    dir: 'public'
  },
  plugins: [
    '~/plugins/vg-countdown.js',
    { src: '@/plugins/aos', mode: 'client' },
    { src: '@/plugins/meta', mode: 'client' }
  ]
})
