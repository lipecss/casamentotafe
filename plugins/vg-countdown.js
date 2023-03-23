import VgCountdown from '@vemlavaraloucagamers/vg-countdown'
import '@vemlavaraloucagamers/vg-countdown/dist/style.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VgCountdown)
})
