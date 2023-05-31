<template>
  <section class="relative" style="margin-top: -55px; height: 700px;">
    <div class="absolute inset-0">
      <NuxtImg format="webp" class="w-full h-full object-cover bg-fixed bg-no-repeat bg-center"
        title="Felipe e Taina cover image" src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/cover-image.jpg"
        alt="Felipe e Taina hero image" width="1200" height="800" sizes="sm:100vw md:100vw lg:100vw" />
      <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
    </div>
  </section>

  <section class="grid text-center place-items-center my-10">
    <div data-testid="Title" class="title">
      <h2>Sejam bem-vindos ao nosso site!</h2>
    </div>

    <div class="items-center max-w-6xl relative">
      <div>
        <p class="about-text">
          É um prazer compartilhar esse momento com vocês! Aqui vamos contar a vocês, queridos amigos e familiares, os
          momentos mais marcantes da nossa história. A contagem regressiva começa, o frio na barriga e toda a ansiedade do
          dia mais esperado de nossas vidas nos enche de alegria em tê-los ao nosso lado. Vamos juntos nesse grande sonho,
          o dia em que nos tornaremos um perante o Senhor!
        </p>
      </div>
    </div>
  </section>

  <section class="text-center place-items-center">
    <div>
      <p class="text-3xl mb-10">#casamentoTaFe</p>
    </div>

    <div class="grid grid-rows-1 text-center grid-flow-col gap-1 mb-10">
      <div>
        <p class="text-3xl">06 de Agosto de 2023</p>
      </div>
    </div>

    <div class="text-center">
      <h1 class="text-2xl md:text-3xl my-6 font-bold">CONTAGEM REGRESSIVA PARA O GRANDE DIA</h1>

      <VgCountdown vg-id="vg-countdown" :day="6" month="aug" :year="2023" :hour="9" :minute="30" :second="0"
        daysText="dias" hoursText="horas" minutesText="minutos" secondsText="segundos" text-color="#141414" separator
        separator-type=":" />
    </div>
  </section>

  <section>
    <div class="flex items-center justify-center pt-10">
      <button
        class="text-center place-items-center text-white bg-gray-800 hover:bg-gray-700 rounded-lg text-sm px-5 py-2.5 mb-2 w-40 lg:w-80"
        @click="goToRsvpRoute" title="Confirmar presença">
        RSVP
      </button>
    </div>
  </section>

  <Divider type="floral" />

  <section class="grid text-center place-items-center">
    <div class="items-center max-w-6xl relative mb-6">
      <h2 class="title">Como nos conhecemos</h2>
      <p class="pb-3">02.02.17</p>

      <div>
        <p class="about-text">
          Trabalhamos juntos e por diversas vezes, nos vimos na hora do almoço. Mas não passava de "Oi, boa tarde. Tudo
          bem?" - "Tudo bem, sim e você?". Mas a nossa história começou em 02 de fevereiro de 2017, quando resolvi mandar
          mensagem o parabenizando pelo seu aniversário!
        </p>

        <p class="about-text">
          No dia seguinte, ele me trouxe pedaço do bolo. Porém, eu estava ausente da empresa e pedi a uma amiga, que me
          passasse o número de telefone dele para agradecer e desde então, não paramos mais de nos falar! Construímos uma
          grande amizade!
        </p>

        <p class="about-text">
          Tivemos diversos momentos juntos e com o tempo, veio a certeza que existia algo muito maior entre nós: as nossas
          conversas, nossos sonhos, nosso jeito de ser, o amor, muita coisa em nós sempre se encaixou de uma forma que
          hoje quando olhamos para trás entendemos que tudo foi plano de Deus sobre nossas vidas.
        </p>

        <p class="about-text">
          Em 03 de junho de 2017 começamos a namorar e nem imaginávamos tudo que iriamos passar! Logo no mês seguinte,
          tivemos uma experiência inesperada (precisei fazer uma cirurgia para retirar 9 nódulos).
        </p>

        <p class="about-text">
          Esse momento foi marcante não apenas pela surpresa indesejada, mas também pelo quanto ele foi companheiro, o
          quanto se preocupou e o quanto cuidou de tudo para que a minha recuperação fosse a menos sofrida possível. Mas
          acima de todo esse momento doloroso, pudemos desfrutar de mais uma experiência com o Senhor. Aprendemos
          diariamente a colocar Deus sempre à frente de tudo e em todas as coisas!
        </p>

        <p class="about-text">
          Crescemos e amadurecemos juntos! Aprendemos diariamente cada dia uma nova forma de amar e fortalecer nosso
          compromisso para ser quem somos hoje!
        </p>

        <p class="about-text">
          Hoje, após quase sete anos juntos e nessa caminhada de várias experiências com Deus em nossas vidas, estamos
          prestes a ver mais uma de Suas promessas se cumprindo e poder assim realizar o nosso grande sonho: O casamento!
        </p>
      </div>
    </div>

    <div class="items-center max-w-6xl mt-10">
      <h2 class="title">A proposta</h2>
      <p class="pb-3">02.04.22</p>

      <p class="about-text">
        Em 02 de Abril de 2022 marcamos um encontro com toda a família. Depois de quase 1 hora de atraso (achando meia pro
        meu Yeezy) e muita diversão, eu finalmente cheguei. Quando a música de repente acabou, estava lá eu pedindo minha
        menina em casamento. Ela chorou, a família chorou, ela disse "SIM" e de repente, estávamos noivos.
      </p>
    </div>
  </section>

  <NuxtImg format="webp" class="mx-auto mt-10 block max-w-full md:max-w-lg h-full"
    src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/separador.png" alt="Separador" title="Separador"
    width="512" height="200" sizes="sm:100vw md:100vw lg:100vw" />

  <section class="py-6 md:py-6">
    <div class="container px-4 mx-auto">
      <div class="text-center max-w-6xl mx-auto">
        <div class="mt-4">
          <NuxtImg format="webp" src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/home_felipe_tatiana.jpg"
            alt="mockup" class="d-block max-w-full rounded shadow-md" sizes="sm:100vw" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import getSiteMeta from '@/utils/getSiteMeta'

const config = useRuntimeConfig()

definePageMeta({
  middleware: ['general']
})

// computeds
const meta = computed(() => {
  const metaData = {
    description: 'Bem-vindos ao nosso site de casamento! Aqui você encontrará todas as informações necessárias para celebrar conosco este momento tão especial. Desde os detalhes da cerimônia até a lista de presentes, estamos compartilhando tudo com vocês. Acompanhe cada passo da nossa jornada até o grande dia e sinta-se parte desta história de amor.',
    url: config.baseUrl
  }

  return getSiteMeta(metaData)
})

useHead({
  meta: () => [...meta.value]
})

// datas
const position = ref(0)

function logScroll() {
  position.value = Math.round(window.scrollY)
}

onMounted(() => {
  window.addEventListener('scroll', logScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', logScroll)
})

const goToRsvpRoute = () => {
  const router = useRouter()
  router.push({ path: '/rsvp' })
}
</script>

<style lang="scss">
.noivos-title {
  color: #141414;
  font-weight: bold;
  text-transform: none;
  line-height: 1.21;
  letter-spacing: 1px;
  margin: 0;
}

.cover-image {
  position: absolute;
  top: -5px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0000007d;
  width: 100%;
  /* adicionado */
  height: 100%;
  /* adicionado */
}

.vg-countdown__items .vg-countdown__items-number {
  line-height: unset !important;
  font-size: 60px !important;
  height: unset !important;
}

.vg-countdown__items .vg-countdown__items-text {
  font-size: 22px !important;
}

.vg-countdown__separator {
  font-size: 50px !important;
}
</style>




