<template>
  <section class="w-full max-w-xs md:max-w-lg lg:max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <p class="about-text">
        Queridos amigos e familiares, estamos muito felizes em compartilhar com vocês este momento tão especial das nossas
        vidas.
      </p>

      <p class="about-text">
        A presença de vocês, nesse dia incrível, é o maior presente que poderíamos ter. Para aqueles que desejam nos
        presentear, criamos uma lista de presentes com todo carinho.
      </p>
    </div>

    <div v-for="(item, index) in giftList" :key="index"
      class="gift-card lg:flex items-center border-b border-b-gray-200 bg-gray-100 border">
      <div class="lg:mr-4 bg-white px-5">
        <div class="w-64 h-64 " :style="giftImage(item.imgUrl)"></div>
      </div>
      <div class="p-4">
        <h5 class="text-lg font-medium">{{ item.name }}</h5>
        <NuxtLink :to="item.url" target="_blank" class="text-tuscany hover:underline">Clique aqui para acessar o site
        </NuxtLink>
      </div>
    </div>

    <section class="mt-6">
      <div class="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 class="text-2xl font-semibold sm:text-4xl text-gray-800">Perguntas e dicas</h2>
        <p class="mt-4 mb-8 dark:text-black">Encontre respostas rápidas sobre sugestões, opções de envio e dúvidas
          comuns aqui.</p>
        <div class="space-y-4">
          <details class="w-full border rounded-lg border-gray-400">
            <summary class="px-4 py-6 focus:outline-none focus-visible:ri text-black font-bold hover:cursor-pointer">Envie
              o presente
              com a sua mensagem.</summary>
            <p class="px-4 py-6 pt-0 ml-4 text-black">Enviando o item através da
              lista de casamento na Amazon como presente, conseguimos identificar e agradecer carinhosamente vocês.</p>

            <p class="px-4 py-6 pt-0 ml-4 text-black">No momento de revisar a compra, clique na opção <span
                class="font-bold">Adicionar
                opções de presente</span></p>
            <nuxt-img format="webp" class="mx-auto"
              src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/dica-presente-1.png"
              alt="Como enviar como presente" />
          </details>

          <details class="w-full border rounded-lg border-gray-400">
            <summary class="px-4 py-6 focus:outline-none focus-visible:ri text-black font-bold hover:cursor-pointer">É
              seguro comprar na Amazon?</summary>
            <p class="px-4 py-6 pt-0 ml-4 text-black">Nossa lista de casamento na Amazon oferece uma experiência de compra
              segura. Você pode comprar os presentes com tranquilidade, sabendo que a Amazon mantém altos padrões de
              segurança para proteger suas informações pessoais.</p>
          </details>
        </div>
      </div>
    </section>

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
    description: 'A presença de vocês nesse dia incrível é o nosso maior presente que poderíamos ter. Para aqueles que desejam nos presentear, criamos uma lista de presentes com todo carinho. Será uma ajuda muito especial para iniciarmos a nossa nova vida juntos',
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
