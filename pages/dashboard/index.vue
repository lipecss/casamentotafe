<template>
  <div>
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between mr-6">
      <h1 class="text-xl md:text-4xl mb-2">
        Olá <span class="font-semibold">
          {{ currentUser.username }}
        </span>
        <span v-if="family && !isAdmin"> e família ❤️</span>
      </h1>
    </div>

    <div class="my-12" v-if="!isAdmin">
      <p class="about-text text-lg my-4">Estamos muito felizes em recebê-lo (s) em nossa página de dashboard! Agradecemos
        do fundo do coração por dedicarem seu tempo para nos prestigiar em nosso grande dia.</p>

      <p class="about-text text-lg">Aqui, você(s) terão acesso algumas informações exclusivas. Esperamos que esta página
        facilite sua experiência e torne sua visita ainda mais agradável.</p>
    </div>

    <div v-else class="mt-10">
      <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div
            class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">{{ status.totalUsers }}</span>
            <span class="block text-gray-500">Convidados</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div
            class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">{{ status.totalConfirmed }}</span>
            <span class="block text-gray-500">Convidados confirmados</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div
            class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
          <div>
            <span class="inline-block text-2xl font-bold">9</span>
            <span class="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
            <span class="block text-gray-500">Underperforming students</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div
            class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">83%</span>
            <span class="block text-gray-500">Finished homeworks</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import getSiteMeta from '@/utils/getSiteMeta'

definePageMeta({
  middleware: ['auth-only'],
  layout: 'admin'
})

// lifecycle
onBeforeMount(() => { setApiPending(true) })

onBeforeRouteLeave(() => { setApiPending(true) })

const auth = useCookie('auth')
const { currentUser, isAdmin } = userStore()
const { setApiPending } = statusStore()
const status = ref({})
const config = useRuntimeConfig()

// computeds
const meta = computed(() => {
  const metaData = {
    title: 'Padrinhos do casamento de Felipe e Tatiana!',
    description: 'Bem-vindos à página de padrinhos do casamento de Felipe e Tatiana! Aqui, apresentamos as pessoas mais especiais em nossas vidas, que irão nos acompanhar em um dos dias mais felizes de nossas vidas. São essas pessoas que têm estado conosco em momentos importantes e que agora compartilham conosco essa alegria única. Conheça um pouco mais sobre cada um deles e sinta a emoção que estamos sentindo por tê-los ao nosso lado neste momento tão especial.',
    url: `${config.baseUrl}/padrinhos`
  }

  return getSiteMeta(metaData)
})

const family = computed(() => currentUser.family)

useHead({
  title: `Área logada - Bem vindo ${currentUser.username}`,
  meta: () => [...meta.value]
})

if (isAdmin) {
  const { fetchApi } = useApi()

  const { data, error } = await fetchApi('/admin-status', {
    method: 'GET',
    headers: { 'x-access-token': auth.value }
  })

  if (!error) status.value = data

  setTimeout(() => { setApiPending(false) }, 1500)
}
</script>
