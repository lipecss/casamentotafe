import { defineStore } from 'pinia'

export const userStore = defineStore('user-store', {
  state: () => {
    return {
      user: {},
    }
  },
  actions: {
    setUser (value) {
      this.user = Object.assign({}, this.user, value)
    },
    clearUserStore () {
      this.user = {}
    }
  },
  getters: {
    currentUser: (state) => state.user.user,
    userAchievements: (state) => state.user.user?.achievements ?? [],
    isAdmin: (state) => state.user.user?.type?.includes('noivos') ?? false,
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  }
})
