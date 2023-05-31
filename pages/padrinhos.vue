<template>
  <div>
    <section class="grid text-center place-items-center">
      <h2 class="title">Padrinhos</h2>

      <div class="mb-10 text-lg">
        <p>Aqui estão algumas das pessoas que fazem parte da nossa história e nos acompanham desde o início. Com certeza,
          tornarão nosso dia ainda mais especial!</p>
      </div>

      <div class="items-center max-w-6xl relative mb-6">
        <PadrinhosCard v-for="(padrinho, index) in padrinhosList" :key="index" :position="padrinho.position"
          :description="padrinho.description" :size="padrinho.size" :name="padrinho.name" :image="padrinho.image" />
      </div>
    </section>
  </div>
</template>

<script setup>
import getSiteMeta from '@/utils/getSiteMeta'

definePageMeta({
  middleware: ['general']
})

const { fetchApi } = useApi()
const config = useRuntimeConfig()

// computeds
const meta = computed(() => {
  const metaData = {
    title: 'Padrinhos do casamento de Felipe e Tatiana!',
    description: 'Bem-vindos à página de padrinhos do casamento de Felipe e Tatiana! Aqui, apresentamos as pessoas mais especiais em nossas vidas, que irão nos acompanhar em um dos dias mais felizes de nossas vidas. São essas pessoas que têm estado conosco em momentos importantes e que agora compartilham conosco essa alegria única. Conheça um pouco mais sobre cada um deles e sinta a emoção que estamos sentindo por tê-los ao nosso lado neste momento tão especial.',
    url: `${config.baseUrl}/padrinhos`
  }

  return getSiteMeta(metaData)
})


useHead({
  title: 'Padrinhos do casamento de Felipe e Tatiana!',
  meta: () => [...meta.value]
})

// datas
let padrinhosList = reactive([])

const { data, error } = await fetchApi('/friends')

if (!error) {
  padrinhosList = data.friends
} else {
  padrinhosList = []
}
</script>
