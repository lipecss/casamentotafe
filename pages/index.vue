<template>
  <section class="relative bg-gray-800" style="margin-top: -55px; height: 700px;">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover bg-fixed bg-no-repeat bg-center" title="Felipe e Taina cover image"
        src="~/assets/img/cover-image.jpg" alt="Felipe e Taina hero image">
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
          Aqui vamos contar à vocês, queridos amigos e familiares, sobre um pouquinho da nossa vida antes desse momento
          especial em que daremos esse passo a mais para unirmos nossas vidas. É um prazer compartilhar esse momento com
          vocês!
        </p>
      </div>
    </div>
  </section>

  <section class="text-center place-items-center">
    <div>
      <p class="text-3xl font-light mb-10">#casamentoTaFe</p>
    </div>

    <div class="grid grid-rows-1 text-center grid-flow-col gap-1 mb-10">
      <div>
        <p class="subtitle">06 de Agosto de 2023</p>
        <p class="mt-6 text-lg font-bold">São Paulo, SP</p>
      </div>
    </div>

    <div class="text-center">
      <h1 class="text-2xl md:text-3xl my-6 font-bold">CONTAGEM REGRESSIVA PARA O GRANDE DIA</h1>

      <VgCountdown vg-id="vg-countdown" :day="6" month="aug" :year="2023" :hour="10" :minute="0" :second="0"
        daysText="dias" hoursText="horas" minutesText="minutos" secondsText="segundos" text-color="#141414" separator
        separator-type=":" />
    </div>
  </section>

  <section>
    <div class="flex items-center justify-center pt-10">
      <button
        class="text-center place-items-center text-dark bg-tuscany hover:bg-pastel-pink rounded-lg text-sm px-5 py-2.5 mb-2 lg:w-80"
        @click="goToRsvpRoute"
        title="Confirmar presença"
        >
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
          bem?" - "Tudo bem sim e você?". Mas a nossa história começou em 02 de Fevereiro de 2017, quando resolvi mandar
          mensagem o parabenizando pelo seu aniversário!
        </p>

        <p class="about-text">
          No dia seguinte, ele me trouxe pedaço do bolo. Porém, eu estava ausente da empresa e pedi a uma amiga, que me
          passasse o número de telefone dele para agradecer e desde então, não paramos mais de nos falar! Com o passar do
          tempo, construimos uma grande amizade!
        </p>

        <p class="about-text">
          Tivemos diversos momentos juntos e com o tempo, veio a certeza que existia algo muito maior entre nós: as nossas
          conversas, nossos sonhos, nosso jeito de ser, o amor, muita coisa em nós sempre se encaixou de uma forma que
          hoje quando olhamos para trás entendemos que tudo foi plano de Deus sobre nossas vidas.
        </p>

        <p class="about-text">
          Em 03 de junho de 2017 começamos a namorar e nem imaginavamos tudo que iriamos passar! Logo no mês seguinte,
          tivemos uma experiência inesperada ( precisei fazer uma cirurgia para retirar 9 nódulos).
        </p>

        <p class="about-text">
          Esse momento foi marcante não apenas pela surpresa indesejada, mas também pelo quanto ele foi companheiro, o
          quanto se preocupou e o quanto cuidou de tudo para que a minha recuperação fosse a menos sofrida possivel. Mas
          acima de todo esse momento doloroso, pudemos desfrutar de mais uma experiência com o Senhor, fomos alcançados
          por Sua graça e misericordia. Aprendemos diariamente a colocar Deus sempre a frente de tudo e em todas as
          coisas!
        </p>

        <p class="about-text">
          Crescemos e amadurecemos juntos! Aprendemos diairiamente cada dia uma nova forma de amar e fortalecer nosso
          compromisso para ser quem somos hoje!
        </p>

        <p class="about-text">
          Hoje após quase sete anos juntos e nessa caminhada de várias experiências com Deus em nossas vidas, estamos
          prestes a ver mais uma de Suas promessas se cumprindo e poder assim realizar o nosso grande sonho: O casamento!
        </p>
      </div>
    </div>

    <div class="items-center max-w-6xl mt-10">
      <h2 class="title">A proposta</h2>
      <p class="pb-3">02.04.22</p>

      <p class="about-text">
        No aniversário de quando nos conhecemos, marcamos um encontro com toda a família. Depois de quase 1 hora de atraso
        minha (achando meia pro meu <span class="font-black">Yeezy</span>) e muita diversão, o noivo chega. Quando a
        música de repente acabou, estava lá eu pedindo minha menina em casamento. Ela chorou, a família chorou e ela disse
        "SIM", e estávamos noivos.
      </p>
    </div>
  </section>

  <img class="mx-auto mt-10 block max-w-full md:max-w-lg h-full" src="~/assets/img/separador2.png" alt="Separador" title="Separador" style="height: 190px;" />

  <section class="py-6 md:py-6">
    <div class="container px-4 mx-auto">
      <div class="text-center max-w-6xl mx-auto">
        <div class="mt-4">
          <img src="~/assets/img/home_felipe_tatiana.jpg" alt="mockup" class="d-block max-w-full rounded shadow-md">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: ['general']
})

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
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




