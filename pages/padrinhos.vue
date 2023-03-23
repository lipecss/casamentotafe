<template>
  <div :class="paddingContent">
    <section class="grid text-center place-items-center">
      <h2 class="title">Padrinhos</h2>

      <div class="mb-10 text-lg">
        <p>Aqui estão as pessoas que vão fazer o nosso dia ainda mais especial.</p>
      </div>

      <div class="items-center max-w-6xl relative mb-6">
        <PadrinhosCard 
          v-for="(padrinho, index) in padrinhosList" :key="index"
          :position="padrinho.position"
          :description="padrinho.description"
          :title="padrinho.name"
          :filename="padrinho.file"
          :filePosition="padrinho.filePosition"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['general']
})

let globalPosition = useScrollPosition()

const paddingContent = computed(() => {
  return globalPosition.value > 30 ? 'pt-52' : 'pt-48'
})

// data
const padrinhosList = reactive([
  { 
    file: 'tonhao_glaucia.jpg', 
    name: 'Tonhao e Glaucia',
    description: 'Antes de conhecer toda a familia do noivo, a noiva conheceu primeiro os cunhados! Foi um passeio bem legal e com muita conversa! Além do vínculo familiar, temos uma troca bem legal ( afinal, eles já passaram por esse momento que estamos passando rs). A chegada do Gui trouxe ainda mais alegria para nossa família e hoje somos os tios mais babões que ele poderia ter, disputamos a câmera para vê-lo e cada conquista dele, é nossa também! Os cunhados são para nós grandes irmãos, que compartilhas lutas e também vitórias! E claro, não poderiamos deixa-los de fora desse momento, pois com certeza, acompanharam tudo desde o primeiro dia.',
  },
  { 
    file: 'de.jpg', 
    name: 'Dé (Vitor)',
    description: 'Além de primo do noivo, é um grande amigo do casal. Juntos já fizeram vários passeios e todos são recheados de comida, risada e adrenalina! Dé tem um coração imenso, ele é do tipo: Bora? Bora!. El topa todos os nossos convites, seja para cantar um karaoke em casa, ir no cinema em pleno domingo a noite ou buscar a noiva (dia de surpresa para o noivo em seu aniversário) no trabalho só para não ir de uber e na volta, gastar mais de 1h30 no trânsito. Além de primo, ele se tornou um irmão que pudemos escolher e ter sua presença ao nosso lado nesse dia tão especial, é uma maneira de agradece-lo por todo carinho e amor que sempre demonstrou por nós!',
    position: 'right'
  },
  { 
    file: 'madrinha_padrinho.jpg', 
    name: 'Inicio',
    description: ''
  },
  { 
    file: 'lucas_mariana', 
    name: 'Inicio',
    description: '',
    position: 'right'
  },
  { 
    file: 'abdon_edna.jpg', 
    name: 'Inicio',
    description: ''
  },
  { 
    file: 'beto.jpg', 
    name: 'Inicio',
    description: '',
    position: 'right'
  },
  { 
    file: 'mayara_vini_renata_andre.jpg', 
    name: 'Inicio',
    description: ''
  },
  { 
    file: 'walter_denize.jpg', 
    name: 'Inicio',
    description: '',
    position: 'right',
    filePosition: '-164px'
  },
  { 
    file: 'igo.jpg', 
    name: 'Inicio',
    description: ''
  }
])
</script>
