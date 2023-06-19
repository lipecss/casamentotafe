<template>
  <div>
    <Loader v-if="isLoading" />

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
            <span class="block text-2xl font-bold">{{ totalUsers }}</span>
            <span class="block text-gray-500">Famílias convidadas</span>
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
            <span class="block text-2xl font-bold">{{ totalConfirmed }}</span>
            <span class="block text-gray-500">Famílias convidadas confirmados</span>
          </div>
        </div>
      </section>

      <section class="cols-12 p-0 m-0">
        <div>
          <button class="inline-flex items-center text-gray-700 hover:text-tuscany p-4 rounded-lg border mt-10"
            @click="isOptionsExpanded = !isOptionsExpanded" @blur="isOptionsExpanded = false">
            <span class="text-gray-700 text-base hover:text-tuscany">Filtrar</span>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
              :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transform transition duration-500 ease-custom"
            enter-class="-translate-y-1/2 scale-y-0 opacity-0" enter-to-class="translate-y-0 scale-y-100 opacity-100"
            leave-active-class="transform transition duration-300 ease-custom"
            leave-class="translate-y-0 scale-y-100 opacity-100" leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
            <ul v-show="isOptionsExpanded"
              class="absolute mb-4 bg-white divide-y shadow-lg overflow-hidden rounded-lg border" style="width: 150px;">
              <li class="transition-colors duration-300 p-4 hover:bg-gray-200 hover:cursor-pointer"
                :class="{ 'bg-tuscany': selected === 'all' }" @click="toggleGetGuest('all')">
                De: Todos
              </li>
              <li class="transition-colors duration-300 p-4 hover:bg-gray-200 hover:cursor-pointer"
                :class="{ 'bg-tuscany': selected === 'Felipe' }" @click="toggleGetGuest('Felipe')">
                De: Felipe
              </li>
              <li class="transition-colors duration-300 p-4 hover:bg-gray-200 hover:cursor-pointer"
                :class="{ 'bg-tuscany': selected === 'Tatiana' }" @click="toggleGetGuest('Tatiana')">
                De: Tatiana
              </li>
            </ul>
          </transition>

          <span class="ml-2 font-semibold">Filtrando por: {{ selected }}</span>
        </div>

        <div class="mt-7" style="height: 500px; overflow: auto;">
          <table class="w-full">
            <thead class="rounded-t-lg border">
              <tr class="text-center">
                <th class="p-3 text-left">#</th>
                <th class="p-3 text-left">Nome</th>
                <th class="p-3">Email</th>
                <th class="">rsvp código</th>
                <th class="p-3">Confirmado?</th>
                <th class="">Qtd. adultos</th>
                <th class="">Qtd. crianças</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(guest, index) in guestData" :key="index" class="h-16 border bg-white shadow rounded-lg w-full">
                <td class="text-center">
                  <span>{{ index + 1 }}</span>
                </td>
                <td class="">
                  <div>
                    <p class="text-sm leading-none text-gray-600 ml-2">{{ guest.username }}</p>
                  </div>
                </td>
                <td class="pl-5">
                  <p class="text-sm leading-none text-gray-600 ml-2">{{ guest.email }}</p>
                </td>
                <td class="pl-5">
                  <p class="text-sm text-center leading-none text-gray-600 ml-2 font-bold">{{ guest.rsvp_code }}</p>
                </td>
                <td class="pl-5">
                  <p class="text-sm text-center leading-none ml-2"
                    :class="{ 'text-green-600': guest.confirmed, 'text-red-600': !guest.confirmed && guest.confirmed !== null, 'text-purple-600': guest.confirmed === null }">
                    {{ confirmedText(guest.confirmed) }}
                  </p>
                </td>
                <td class="pl-5">
                  <p class="text-sm text-center leading-none ml-2">
                    {{ guest.guests }}
                  </p>
                </td>
                <td class="pl-5">
                  <p class="text-sm text-center leading-none ml-2">
                    {{ guest.kids }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
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
const config = useRuntimeConfig()
const { fetchApi } = useApi()

// datas
const guestData = ref([])
const selected = ref('all')
const isOptionsExpanded = ref(false)
const totalUsers = ref(null)
const totalConfirmed = ref(null)
let isLoading = ref(false)

// computed
const meta = computed(() => {
  const metaData = {
    title: 'Padrinhos do casamento de Felipe e Tatiana!',
    description: 'Bem-vindos à página de padrinhos do casamento de Felipe e Tatiana! Aqui, apresentamos as pessoas mais especiais em nossas vidas, que irão nos acompanhar em um dos dias mais felizes de nossas vidas. São essas pessoas que têm estado conosco em momentos importantes e que agora compartilham conosco essa alegria única. Conheça um pouco mais sobre cada um deles e sinta a emoção que estamos sentindo por tê-los ao nosso lado neste momento tão especial.',
    url: `${config.baseUrl}/dashboard`
  }

  return getSiteMeta(metaData)
})

const family = computed(() => currentUser.family)

const confirmedText = (status) => {
  switch (status) {
    case null:
      return 'Pendente'
    case true:
      return 'Sim'
    case false:
      return 'Não'
  }
}

useHead({
  title: `Área logada - Bem vindo ${currentUser.username}`,
  meta: () => [...meta.value]
})

// methods
const getGuests = async (from) => {
  isLoading.value = true

  let options = {
    method: 'GET',
    headers: { 'x-access-token': auth.value }
  };

  const { data: guest } = await fetchApi(`/guests/${from}`, options);

  if (guest) {
    guestData.value = await guest.resolvedFinal.sort((a, b) => {
      // Ordenar por confirmed em ordem decrescente
      if (a.confirmed && !b.confirmed) {
        return -1;
      }
      if (!a.confirmed && b.confirmed) {
        return 1;
      }

      // Ordenar por username em ordem crescente
      return a.username.localeCompare(b.username);
    });
    totalUsers.value = guest.totalUsers
    totalConfirmed.value = guest.totalConfirmed
  }

  isLoading.value = false
}

const toggleGetGuest = async (filter) => {
  if (filter !== selected.value) {
    selected.value = filter
    await getGuests(filter);
  }
}

if (isAdmin) {
  await getGuests('all')
}

setTimeout(() => { setApiPending(false) }, 1500)
</script>
