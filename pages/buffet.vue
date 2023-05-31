<template>
  <section class="w-full max-w-xs md:max-w-lg lg:max-w-6xl mx-auto">
    <!-- Intro -->
    <section class="mb-2">
      <p class="about-text">
        Estamos nos preparando para esse dia, pensando carinhosamente em cada detalhe e será ainda melhor, por
        compartilharmos juntos esse momento. Sabemos que muitos de vocês não se conhecem, mas será uma grande oportunidade
        para se conhecerem e compartilhar esse dia juntinho conosco.
      </p>

      <p class="about-text">
        Aqui você encontrará todas as informações importantes sobre o nosso grande dia.
      </p>

      <p class="about-text">
        Nós estamos muito empolgados em compartilhar cada detalhe com vocês, nossos queridos convidados e familiares.
      </p>
    </section>
    <!-- Intro -->

    <Divider type="floral" />

    <!-- O buffet -->
    <section>
      <h2 class="title text-center place-items-center">O Buffet</h2>
      <p class="pb-3 text-center place-items-center">Monte Millazo</p>

      <p class="about-text">
        A escolha do <span class="font-bold">Monte Millazzo</span> em Arujá para nossa cerimônia de casamento
        foi uma decisão fácil de ser tomada. Desde o momento em que o visitamos,
        nos apaixonamos por sua beleza natural e tranquilidade. É o lugar
        perfeito para selar nossa união e iniciar uma nova fase de nossas vidas.
      </p>

      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="hidden md:block md:w-1/2 px-4">
            <div class="h-full w-full bg-cover shadow-md"
              style="background-image: url('https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/buffet1.jpg')" />
          </div>
          <div class="md:w-1/2 h-auto px-4">
            <div class="mb-8">
              <nuxt-img format="webp" class="shadow-md"
                src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/buffet2.jpg" alt="" width="692"
                height="270" sizes="sm:100vw md:100vw lg:100vw" />
            </div>
            <div>
              <nuxt-img format="webp" class="shadow-md"
                src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/buffet3.jpg" alt="" width="692"
                height="270" sizes="sm:100vw md:100vw lg:100vw" />
            </div>
          </div>
        </div>
      </section>

      <p class="about-text">
        O local conquistou nosso coração, além do espaço ser rodeado pela natureza, percebemos todos os detalhes (desde a
        capela até o salão principal) foram construídos com muito amor e carinho.
      </p>

      <p class="about-text">
        A equipe que nos recebeu no dia da visita, foram muito gentis e nos fizeram sentir em casa desde o primeiro
        momento.
      </p>

      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <nuxt-img format="webp" class="shadow-md"
              src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/buffet4.jpg" alt="" width="692" height="270"
              sizes="sm:100vw md:100vw lg:100vw" />
          </div>

          <div class="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <p class="about-text" style="padding-top: 0 !important;">
              Levamos nossos pais para conhecer e apresentar o local que havíamos escolhido para o nosso casamento. Foi um
              dia muito especial, pois pudemos compartilhar nossa alegria e felicidade com eles. Ver a alegria nos rostos
              dos nossos pais ao conhecerem o local e perceberem como seria o grande dia, foi uma das melhores sensações
              que já tivemos.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="lg:w-1/2 px-4 mb-8 md:mb-0">
            <p class="about-text" style="padding-top: 0 !important;">
              Estamos animados para realizar nosso casamento no <span class="font-bold">Monte Millazzo</span> e
              compartilhar essa experiência única com
              nossos amigos e familiares. Não poderíamos estar mais felizes com a escolha que fizemos e mal podemos
              esperar para o grande dia chegar!
            </p>
          </div>
          <div class="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <nuxt-img format="webp" class="shadow-md"
              src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/buffet5.jpg" alt="" width="692" height="270"
              sizes="sm:100vw md:100vw lg:100vw" />
          </div>
        </div>
      </section>
    </section>
    <!-- O buffet -->

    <!-- O Menu -->
    <section class="mt-10">
      <h2 class="title text-center place-items-center">O Menu</h2>

      <p class="about-text">
        Ah, não podemos deixar de falar sobre o menu! A comida do Monte Millazzo é simplesmente <span
          class="font-bold">maravilhosa</span>! Não há
        palavras suficientes para descrever a infinidade de sabores, texturas e aromas que experimentamos durante a
        degustação.
      </p>

      <p class="about-text">
        Nós dois ficamos impressionados com a qualidade dos pratos e com o cuidado que a equipe coloca em cada detalhe.
        Desde a escolha dos ingredientes até a apresentação dos pratos, tudo é feito com muito amor e dedicação.
      </p>

      <p class="about-text">
        A equipe do Monte Millazzo preparou um menu especial para o nosso casamento, com opções para agradar todos os
        paladares.
      </p>

      <p class="about-text">
        Apresentamos a vocês, o nosso menu:
      </p>

      <nuxt-img format="webp" class="mx-auto my-10"
        src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/separador.png" alt="Separador" title="Separador"
        width="692" height="270" sizes="sm:100vw md:100vw lg:100vw" />

      <div class="px-4">
        <div class="grid grid-cols-2 gap-4 py-5">
          <div>
            <h2 class="text-2xl font-bold mb-4">Entradas</h2>
            <ul class="list-disc pl-4">
              <li class="menu-item leading-10" v-for="(entrada, index) in entradas" :key="index">{{ entrada }}</li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Prato Principal</h2>
            <ul class="list-disc pl-4">
              <li class="menu-item leading-10" v-for="(prato, index) in pratoPincipal" :key="index">{{ prato }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">Doces</h2>
            <ul class="list-disc pl-4">
              <li class="menu-item leading-10" v-for="(doce, index) in doces" :key="index">{{ doce }}</li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Bebidas</h2>
            <ul class="list-disc pl-4">
              <li class="menu-item leading-10" v-for="(bebida, index) in bebidas" :key="index">{{ bebida }}</li>
            </ul>
          </div>
        </div>
      </div>

      <p class="about-text" style="font-weight: bold;">
        Estamos ansiosos para ver todos vocês saboreando esses pratos deliciosos no nosso casamento!
      </p>
    </section>
    <!-- O Menu -->
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

//datas
const entradas = reactive([
  'Mini salgados fritos e assados',
  'Dadinho de tapioca com geleia de pimenta',
  'Pastelzinho de queijo com limão siciliano',
  'Batatinha  recheada com cream cheese e bacon ou crispy de cebola'
])

const pratoPincipal = reactive([
  'Arroz branco',
  'Sobrecoxas de frango',
  'Lagarto ao molho madeira',
  'Espaguete de vegetais',
  'Batata rústica',
  'Farofa brasileira',
  'Salada provençal',
])

const doces = reactive([
  'Doces tradicionais',
  'Bolo',
  'Pudim',
  'Brigadeiro de colher',
  'Mousse de Maracujá',
  'Torta de Limão',
  'Merengue de Morango'
])

const bebidas = reactive([
  'Milk shake',
  'Refrigerante',
  'Suco',
  'Água'
])
</script>


<style lang="scss" scoped>
.menu-item {
  font-family: 'Assistant', sans-serif;
}
</style>
