<template>
  <div>
    <div class="text-center place-items-center">
      <h2 class="title">Coisas da casa nova</h2>

      <img 
        class="mx-auto mb-6"
        width="150"
        src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/rosa.png"
        alt="Seprador"
        title="Separador"
        height="270"
        sizes="sm:100vw md:100vw lg:100vw"
      />

      <p class="about-text text-space-10">Queridos familiares e amigos, para nós, a presença de vocês neste dia tão especial é o maior presente que poderíamos receber. </p>

      <p class="about-text text-space-10">Mas, se vocês também quiserem nos presentear, separamos algumas opções abaixo.</p>

      <p class="about-text text-space-10">Com amor, Taiana e Felipe.</p>
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

const config = useRuntimeConfig()

// datas
let products = ref([])

// computed
const meta = computed(() => {
  const metaData = {
    title: 'Lojinha de presentes para Tatiana e Felipe!',
    url: `${config.baseUrl}/dashboard/lojinha`
  }

  return getSiteMeta(metaData)
})

useHead({
  title: 'Lojinha',
  meta: () => [...meta.value]
})

// lifecyle
const { fetchApi } = useApi()
const { addToCart, removeToCart } = cartStore()

// methods
const { data, error } = await fetchApi('/products', { method: 'GET' })

if (!error) products.value = data.products

const addItem = (product) => {
  addToCart(product)
}

const emitRemoveItem = (product) => {
  removeToCart(product)
}
</script>
