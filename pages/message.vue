<template>
  <section class="w-full max-w-xs md:max-w-lg lg:max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <MessageSection />
    </div>
  </section>
</template>

<script setup>
import getSiteMeta from '@/utils/getSiteMeta'

definePageMeta({
  middleware: ["general"],
})

const config = useRuntimeConfig()

// computed
const meta = computed(() => {
  const metaData = {
    description: 'Nós adoraríamos ouvir de você e receber seus bons desejos e palavras carinhosas. Este é o lugar perfeito para você deixar uma mensagem especial para os noivos. Compartilhe seus pensamentos, conselhos, histórias engraçadas ou simplesmente envie uma mensagem de felicitações. Sua presença e seus votos significam muito para nós. Agradecemos antecipadamente por compartilhar esse momento especial conosco!',
    url: config.baseUrl
  }

  return getSiteMeta(metaData)
})

useHead({
  title: 'Deixe seu recado para os noivos!',
  meta: () => [...meta.value]
})
</script>


<style lang="scss" scoped>
.gift-card:first-child {
  margin-bottom: 20px;
}
</style>
