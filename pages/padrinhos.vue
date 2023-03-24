<template>
  <div>
    <section class="grid text-center place-items-center">
      <h2 class="title">Padrinhos</h2>

      <div class="mb-10 text-lg">
        <p>Aqui estão as pessoas que vão fazer o nosso dia ainda mais especial.</p>
      </div>

      <div class="items-center max-w-6xl relative mb-6">
        <PadrinhosCard 
          v-for="(padrinho, index) in padrinhosList" :key="index"
          :position="padrinho.position"
          :description="padrinho.description"
          :name="padrinho.name"
          :image="padrinho.image"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['general']
})

const { fetchApi } = useApi()

// datas
let padrinhosList = reactive([])

const { data, error } = await fetchApi('/friends')

if (!error) {
  padrinhosList = data.friends
} else {
  padrinhosList = []
}
</script>
