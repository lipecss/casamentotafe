<template>
  <section class="w-full max-w-xs md:max-w-lg lg:max-w-4xl mx-auto">
    <!-- Intro -->
    <section class="mb-2">
      <p class="about-text">
        Estamos nos preparando para esse dia, pensando carinhosamente em cada
        detalhe e será ainda melhor, por compartilharmos juntos esse momento.
        Sabemos que muitos de vocês não se conhecem, mas será uma grande
        oportunidade para se conhecerem e compartilhar esse dia juntinho com a
        gente.
      </p>

      <p class="about-text">
        Aqui você encontrará todas as informações importantes sobre o nosso
        grande dia.
      </p>

      <p class="about-text">
        Nós estamos muito empolgados em compartilhar cada detalhe com vocês,
        nossos queridos convidados e familiares.
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
              style="background-image: url('https://source.unsplash.com/random/1280x720')" />
          </div>
          <div class="md:w-1/2 h-auto px-4">
            <div class="mb-8">
              <img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
            </div>
            <div>
              <img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
            </div>
          </div>
        </div>
      </section>

      <p class="about-text">
        O local conquistou nosso coração, além do espaço ser rodeado pela
        natureza, percebemos que tudo foi cronstruido com muito amor e carinh.
        Cada detalhe foi pensado com cuidado e dedicação, desde a arquitetura da
        igrejinha até a decoração do espaço. A equipe também nos receberam com
        tanta gentileza e nos fizeram sentir em casa desde o primeiro momento.
        Não é à toa que a noiva sempre sonhou em casar lá.
      </p>

      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/2 px-4 mb-8 md:mb-0">
            <img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt="">
          </div>

          <div class="md:w-1/2 px-4 mb-8 md:mb-0">
            <p class="about-text" style="padding-top: 0 !important;">
              Levamos nossos pais para conhecer e apresentar o local que havíamos escolhido para o nosso casamento. Foi um
              dia muito especial, pois pudemos compartilhar nossa alegria e felicidade com eles. Ver a alegria nos rostos
              dos nossos pais ao conhecerem o local e perceberem como seríamos bem cuidados ali foi uma das melhores
              sensações que já tivemos.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/2 px-4 mb-8 md:mb-0">
            <p class="about-text" style="padding-top: 0 !important;">
              Estamos animados para ter nosso casamento no <span class="font-bold">Monte Millazzo</span> e compartilhar
              essa experiência única com nossos amigos e familiares. Não poderíamos estar mais felizes com a escolha que
              fizemos e mal podemos esperar para o grande dia chegar!
            </p>
          </div>
          <div class="md:w-1/2 px-4 mb-8 md:mb-0">
            <img class="shadow-md" src="https://source.unsplash.com/random/1280x720" alt="">
          </div>
        </div>
      </section>
    </section>
    <!-- O buffet -->

    <!-- O Menu -->
    <section class="mt-10">
      <h2 class="title text-center place-items-center">O Menu</h2>

      <p class="about-text">
        Ah, não podemos deixar de falar sobre o menu! A comida do <span class="font-bold">Monte Millazzo</span> é
        simplesmente divina! Não há palavras suficientes para descrever a infinidade de sabores, texturas e aromas que
        experimentamos durante a degustação.
      </p>

      <p class="about-text">
        Nós dois ficamos impressionados com a qualidade dos pratos e com o cuidado que a equipe coloca em cada detalhe.
        Desde a escolha dos ingredientes até a apresentação dos pratos, tudo é feito com muito amor e dedicação.
      </p>

      <p class="about-text">
        A equipe do Monte Millazzo preparou um menu especial para o nosso casamento, com opções para agradar a todos os
        gostos e paladares. Aqui está o nosso menu para que você possa salivar junto com a gente:
      </p>

      <img class="mx-auto my-10" src="~/assets/img/separador2.png" alt="Separador" title="Separador" style="height: 190px;" />

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

      <p class="about-text">
        Estamos ansiosos para ver todos vocês saboreando esses pratos deliciosos no nosso casamento!
      </p>
    </section>
    <!-- O Menu -->
  </section>
</template>

<script setup>
definePageMeta({
  middleware: ["general"],
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
