const type = 'website'
const url = 'https://casamentotafe.com/'
const title = 'Bem-vindo ao site do casamento de Tatiana e Felipe | 06 de agosto de 2023'
const description = 'Bem-vindos ao nosso cantinho virtual! Aqui vocês encontrarão todas as informações sobre o casamento mais aguardado do ano: o nosso! Somos Felipe e Tatiana, e estamos vivendo um conto de fadas que só poderia ter um final feliz: o nosso casamento! Queremos compartilhar com vocês todos os detalhes desse momento mágico e inesquecível das nossas vidas. Preparem-se para uma celebração cheia de amor, alegria, música, dança e muitas surpresas. Nosso amor transborda e queremos que vocês façam parte desse momento tão especial. Vamos celebrar juntos!'
const mainImage = 'https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/home_felipe_tatiana.jpg'
const twitterSite = ''
const twitterCard = 'summary_large_image'

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || url
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || url
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.mainImage) || mainImage
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: (meta && meta.twitterSite) || twitterSite
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: (meta && meta.twitterCard) || twitterCard
    }
  ]
}
