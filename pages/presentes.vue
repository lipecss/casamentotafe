<template>
  <section class="w-full max-w-xs md:max-w-lg lg:max-w-6xl mx-auto">
    presentes
  </section>
</template>

<script setup>
import getSiteMeta from '@/utils/getSiteMeta'

definePageMeta({
  middleware: ["general"],
})

const config = useRuntimeConfig()
// computeds
const meta = computed(() => {
  const metaData = {
    description: 'Nosso buffet é preparado com muito cuidado e carinho, pensando em cada detalhe para oferecer uma experiência gastronômica única para nossos clientes. Utilizamos ingredientes frescos e de alta qualidade em nossos pratos, que são cuidadosamente selecionados para garantir o melhor sabor e aroma. Além disso, nosso espaço conta com uma vista deslumbrante para o Monte Millazzo, uma paisagem de tirar o fôlego que proporciona um clima agradável e aconchegante para desfrutar de uma boa refeição. Venha experimentar o melhor da culinária em nosso buffet e aproveitar o encanto da natureza no Monte Millazzo!',
    url: config.baseUrl
  }

  return getSiteMeta(metaData)
})

useHead({
  title: 'Buffet do casamento de Tatiana e Felipe!',
  meta: () => [...meta.value]
})
</script>


<style lang="scss" scoped>
.menu-item {
  font-family: 'Assistant', sans-serif;
}
</style>
