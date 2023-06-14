<template>
  <div class="p-6 sm:p-10 space-y-1">
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div class="mr-6">
        <h1 class="text-4xl font-semibold mb-2">Mensagens</h1>
        <h2 class="text-gray-600 ml-0.5">Aprove ou veja as mensagens enviadas</h2>
      </div>
    </div>

    <section class="grid grid-cols-4 gap-6">
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div
          class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div>
          <span class="block text-2xl font-bold">{{ totalMessages }}</span>
          <span class="block text-gray-500">mensagens</span>
        </div>
      </div>
    </section>

    <section class="grid pt-10">
      <section class="dark:text-gray-100">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="message in messagesData" :key="message"
            class="max-w-lg mx-auto group hover:no-underline focus:no-underline dark:bg-koamaru">
            <div class="p-6 space-y-2">
              <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">{{ message.name }}</h3>
              <p class="text-xs dark:text-gray-400 py-2">{{ formatDate(message.created_at) }}</p>
              <span v-if="message.visible" class="text-green-500 border border-green-500 rounded p-1">Exibindo</span>
              <span v-else class="text-red-500 border border-red-500 rounded p-1">Oculto</span>

              <p>{{ message.message }}</p>

              <button v-if="!message.visible" @click="toggleMessage(message, true)"
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Exibir</button>
              <button v-else @click="toggleMessage(message, false)"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ocultar</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import spacetime from 'spacetime'

definePageMeta({
  middleware: ['auth-only'],
  layout: 'admin'
})

const { fetchApi } = useApi()
const { setApiPending } = statusStore()
const auth = useCookie('auth')

// data
let messagesData = ref([])

let { data, error } = await fetchApi('/all-message', {
  method: 'GET',
  headers: { 'x-access-token': auth.value }
})

// computed
const totalMessages = computed(() => {
  return messagesData.value.length
})

if (!error) messagesData.value = data

setTimeout(() => { setApiPending(false) }, 1500)

// method
const formatDate = (date) => {
  return spacetime(date).format('nice-short')
}

const toggleMessage = async ({ _id }, status) => {
  setApiPending(true)

  const { data: message, error } = await fetchApi('/message', {
    method: 'PATCH',
    headers: { 'x-access-token': auth.value },
    body: { _id, status }
  });

  if (!error) {
    messagesData.value = await messagesData.value.map(item => {
      if (item._id === message._id) {
        return {
          ...item,
          visible: message.visible
        };
      }
      return item; // Retorne o item original caso não seja o item a ser atualizado
    });
  }

  setApiPending(false)
};

</script>
