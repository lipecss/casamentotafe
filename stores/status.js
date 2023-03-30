import { defineStore } from 'pinia'

export const statusStore = defineStore('status-store', {
  state: () => {
    return {
      status: {},
      apiPending: false
    }
  },
  actions: {
    setStatus (value) {
      this.status = Object.assign({}, this.status, value)
    },
    setApiPending (value) { // novo método para atualizar o estado da chamada da API
      this.apiPending = value
    },
    clearUserStore () {
      this.status = {}
      this.apiPending = false
    }
  },
  getters: {
    isBeforeWedding: (state) => state.status.isBeforeWedding,
    isApiPending: (state) => state.apiPending
  }
})
