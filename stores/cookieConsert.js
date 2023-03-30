import { defineStore } from 'pinia'

export const cookieConsertStore = defineStore('cookie-consert-store', {
  state: () => {
    return {
      cookieConsert: false,
    }
  },
  actions: {
    setCookieConsert () {
      this.cookieConsert = true
    },
  },
  getters: {
    hasCookieConsert: (state) => state.cookieConsert
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  }
})
