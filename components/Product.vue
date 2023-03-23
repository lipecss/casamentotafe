<template>
  <div
    v-for="(product, index) in items" :key="index"
    class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    >
    <div>
      <img
        :src="product.image"
        alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />

      <div class="px-4 py-3 w-72">
        <p class="text-lg text-black block">
          {{ product.description }}
        </p>

        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">
            R$ {{ product.value }}
          </p>

          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">R$ {{ product.discount }}</p>
          </del>

          <div class="ml-auto">
            <button
              v-if="!containsThisItem(product)"
              @click="emitAddItem(product)"
              class="outline outline-offset-2 hover:text-white py-1 px-1 lg:py-2 lg:px-2 hover:bg-tuscany active:bg-red-500 outline-1">
              Adicionar
            </button>

            <button
              v-else
              @click="emitRemoveItem(product)"
              class="px-4 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300">
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

// props
const props = defineProps({ items: Array })

const some = cartStore()

const { cartList } = storeToRefs(some)

const emit = defineEmits(['add-new-item', 'remove-item'])

// methods
const emitAddItem = (product) => {
  emit('add-new-item', product)
}

const emitRemoveItem = (product) => {
  emit('remove-item', product)
}

const containsThisItem = (item) => {
  return cartList.value.some(product => item._id === product._id)
}

</script>
