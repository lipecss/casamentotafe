import { defineStore } from 'pinia'

export const cartStore = defineStore('cart-store', {
  state: () => {
    return {
      cart: [],
    }
  },
  actions: {
    addToCart  (product) {
      this.cart.push(product)
    },
    removeToCart  (product) {
      var i = this.cart.findIndex(x => x._id === product._id)

      if (i !== -1) this.cart.splice(i, 1)
    },
    clearCart () {
      this.cart = []
    }
  },
  getters: {
    cartList:  (state) => state.cart,
    totalItems : (state) => state.cart.length,
    totalValue: (state) => {
      return state.cart.reduce((total, item) => {
        return total + parseFloat(item.value)
      }, 0).toFixed(2)
    }
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  }
})
