import { defineStore } from 'pinia'

export const userStore = defineStore('user-store', {
  state: () => {
    return {
      user: {},
    }
  },
  actions: {
    setUser (value) {
      this.user = value
    },
    clearUserStore () {
      this.user = {}
    }
  },
  getters: {
    currentUser: (state) => state.user.user
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  }
})
