import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const { gaKey } = useRuntimeConfig()

  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: gaKey,
    },
  }, nuxtApp.$router)
})
