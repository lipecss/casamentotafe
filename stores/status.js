import { defineStore } from 'pinia'

export const statusStore = defineStore('status-store', {
  state: () => {
    return {
      status: {},
    }
  },
  actions: {
    setStatus (value) {
      this.status = Object.assign({}, this.status, value)
    },
    clearUserStore () {
      this.status = {}
    }
  },
  getters: {
    isBeforeWedding: (state) => state.status.isBeforeWedding,
  }
})
