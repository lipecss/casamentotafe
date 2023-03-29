<template>
  <section class="w-full max-w-xs md:max-w-lg lg:max-w-6xl mx-auto">
    <!-- Intro -->
    <section class="mb-2">
      <p class="about-text text-center">
        NÃO PERCAM ESSE MOMENTO LINDO E EMOCIONANTE DAS NOSSAS VIDAS. CONTAMOS COM VOCÊ PARA SER AINDA MAIS ESPECIAL!
      </p>
    </section>
    <!-- Intro -->

    <!-- A capela -->
    <section class="md:mt-10">
      <h2 class="title text-center place-items-center">Cerimônia religiosa</h2>
      <p class="pb-3 text-center place-items-center">A capela</p>

      <p class="about-text">
        A capela do Monte Millazzo é um lugar verdadeiramente mágico e inspirador. É um espaço muito especial, a aprenta
        ter sido construído com muito amor e cuidado pela equipe que administra o local.
      </p>

      <p class="about-text">
        Ao entrar na capela, é fácil se sentir imediatamente envolvido por uma atmosfera de paz e tranquilidade. As
        paredes de pedra, os vitrais coloridos e os bancos de madeira criam um ambiente acolhedor e íntimo, perfeito para
        esse nosso momento.
      </p>

      <section class="md:py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <nuxt-img
              format="webp"
              class="shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
              width="692"
              height="270"
              sizes="sm:100vw md:100vw lg:100vw"
            />
          </div>
          <div class="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <p class="about-text" style="padding-top: 0 !important;">
              O teto alto da capela é sustentado por pilares de madeira maciça, que adicionam uma sensação de
              grandiosidade e solidez ao espaço. A luz natural que entra pelos vitrais coloridos, combinada com o som
              suave da natureza ao redor, cria um ambiente sereno e inspirador que é perfeito para a cerimônia do
              casamento.
            </p>
          </div>
        </div>
      </section>

      <section class="pt-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/3 px-4 mb-8">
            <nuxt-img
              format="webp" 
              class="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
              width="692"
              height="270"
              sizes="sm:100vw md:100vw lg:100vw"
            />
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <nuxt-img
              format="webp" 
              class="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
              width="692"
              height="270"
              sizes="sm:100vw md:100vw lg:100vw"
            />
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <nuxt-img
              format="webp"
              class="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
              width="692"
              height="270"
              sizes="sm:100vw md:100vw lg:100vw"
            />
          </div>
        </div>
      </section>
    </section>
    <!-- A capela -->

    <!-- A Festa -->
    <section class="md:mt-10">
      <h2 class="title text-center place-items-center">Cerimônia religiosa</h2>
      <p class="pb-3 text-center place-items-center">A capela</p>

      <p class="about-text">
        Ah, o salão de festas! É o lugar onde a festa realmente começa e onde vamos celebrar a união do nosso amor com
        nossos amigos e familiares.
      </p>

      <p class="about-text">
        O salão é um espaço amplo e lindo, decorado com muito bom gosto e estilo. Há uma pista de dança enorme, onde vamos
        dançar até nossos pés doerem e as músicas vão variar desde as românticas para os momentos mais calmos até as mais
        agitadas para ninguém ficar parado.
      </p>

      <section class="py-8 px-4">
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/2 px-4 mb-8 md:mb-0">
            <nuxt-img
              format="webp"
              class="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
              width="692"
              height="270"
              sizes="sm:100vw md:100vw lg:100vw"
            />
          </div>
          <div class="md:w-1/2 px-4 mb-8 md:mb-0">
            <nuxt-img
              format="webp"
              class="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
              width="692"
              height="270"
              sizes="sm:100vw md:100vw lg:100vw"
            />
          </div>
        </div>
      </section>
    </section>
    <!-- A Festa -->

    <div class="flex flex-wrap">
      <div class="w-full md:-96">
        <div class="h-80 w-full mx-auto" style="height: 600px;">
          <Map />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: ["general"],
})

useHead({
  title: 'My App',
})
</script>
