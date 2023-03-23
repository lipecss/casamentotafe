<template>
  <div>
    <div class="text-center place-items-center">
      <h2 class="title">Coisas da casa nova</h2>

      <img class="mx-auto mb-6" width="150" src="~/assets/img/rosa.png" alt="Seprador" title="Separador"/>

      <p class="text-space-10">Queridos familiares e amigos, para nós, a presença de vocês neste dia tão especial é o maior presente que poderíamos receber. </p>

      <p class="text-space-10">Mas, se vocês também quiserem nos presentear, separamos algumas opções abaixo.</p>

      <p class="text-space-10">Com amor, Taiana e Felipe.</p>
    </div>

    <section
      class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      <Product 
        :items="products"
        @add-new-item="addItem($event)"
        @remove-item="emitRemoveItem($event)"
      />      
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth-only'],
  layout: 'admin'
})

// datas
let products = reactive([])

const { fetchApi } = useApi()
const { addToCart, removeToCart } = cartStore()

//methods
const { data, error } = await fetchApi('/products', { method: 'GET' })

// methods
const addItem = (product) => {
  addToCart(product)
}

const emitRemoveItem = (product) => {
  removeToCart(product)
}

if (!error.value) products = data.value.products
</script>
