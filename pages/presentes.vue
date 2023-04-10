<template>
  <section class="w-full max-w-xs md:max-w-lg lg:max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <p class="about-text">
        Queridos amigos e familiares, estamos muito felizes em compartilhar com vocês este momento tão especial das nossas
        vidas.
      </p>

      <p class="about-text">
        A presença de vocês, nesse dia incrível, é o maior presente que poderíamos ter. Para aqueles que desejam nos presentear, criamos uma lista de presentes com todo carinho.
      </p>

      <p class="about-text">
        Será uma ajuda muito especial para iniciarmos a nossa nova vida juntos
      </p>

    </div>

    <div v-for="(item, index) in giftList" :key="index"
      class="gift-card lg:flex items-center border-b bg-gray-100 border">
      <div class="lg:mr-4 bg-white px-5">
        <div class="w-64 h-64 " :style="giftImage(item.imgUrl)"></div>
      </div>
      <div class="p-4">
        <h5 class="text-lg font-medium">{{ item.name }}</h5>
        <NuxtLink :to="item.url" target="_blank" class="text-tuscany hover:underline">Clique aqui para acessar o site
        </NuxtLink>
      </div>
    </div>

  </section>
</template>

<script setup>
import getSiteMeta from '@/utils/getSiteMeta'

definePageMeta({
  middleware: ["general"],
})

const config = useRuntimeConfig()

// datas
const giftList = reactive([
  {
    name: 'Amazon',
    imgUrl: 'https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/amazon.png',
    url: 'https://www.amazon.com.br/hz/wishlist/ls/1UKY7PUGIVYYD'
  }
])

// computeds
const meta = computed(() => {
  const metaData = {
    description: 'Nosso buffet é preparado com muito cuidado e carinho, pensando em cada detalhe para oferecer uma experiência gastronômica única para nossos clientes. Utilizamos ingredientes frescos e de alta qualidade em nossos pratos, que são cuidadosamente selecionados para garantir o melhor sabor e aroma. Além disso, nosso espaço conta com uma vista deslumbrante para o Monte Millazzo, uma paisagem de tirar o fôlego que proporciona um clima agradável e aconchegante para desfrutar de uma boa refeição. Venha experimentar o melhor da culinária em nosso buffet e aproveitar o encanto da natureza no Monte Millazzo!',
    url: config.baseUrl
  }

  return getSiteMeta(metaData)
})

const giftImage = (imgUrl) => {
  return {
    paddingTop: '100%',
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }
}

useHead({
  title: 'Lista de presentes do casamento de Tatiana e Felipe!',
  meta: () => [...meta.value]
})
</script>


<style lang="scss" scoped>
.gift-card:first-child {
  margin-bottom: 20px;
}
</style>
