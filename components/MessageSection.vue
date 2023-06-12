<template>
  <div class="items-center max-w-6xl relative mb-6">
    <h2 class="title">Mensagens</h2>
    <p class="pb-3">Deixe sua mensagem para nós!</p>
    <h1 class="text-xl my-6">OBRIGADO PELO CARINHO. VAMOS LEMBRAR PARA SEMPRE DESTE MOMENTO TÃO
      ESPECIAL!</h1>

    <p class="text-red-500 font-bold">**Seja respeitoso, sua mensagem será visível para todos logo abaixo.</p>

    <div class="grid max-w-screen-sm grid-cols-1 py-16 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 dark:text-gray-100">
      <form class="space-y-6 ng-untouched ng-pristine ng-valid" @submit.prevent="sendMessage">
        <div>
          <input required v-model="form.name"
            class="mt-1 py-2 px-4 text-base bg-transparent text-gray-700 border border-tuscany appearance-none focus:outline-none focus:shadow-outline w-full"
            placeholder="Nome completo">
        </div>
        <div>
          <input required type="email" v-model="form.email"
            class="mt-1 py-2 px-4 text-base bg-transparent text-gray-700 border border-tuscany appearance-none focus:outline-none focus:shadow-outline w-full"
            placeholder="E-mail">
        </div>
        <div>
          <textarea id="message" rows="4" v-model="form.message"
            class="w-full p-3 rounded text-base bg-transparent text-gray-700 border border-tuscany appearance-none focus:outline-none focus:shadow-outline"
            @input="checkMessageLength" />
        </div>
        <span class="text-left block m-0 text-gray-700 mt-0 pt-0 font-mono text-xs">{{ remainingCharacters }} caracteres
          restantes</span>
        <NuxtTurnstile ref="turnstile" v-model="token" />

        <button type="submit" :disabled="!disabledButton"
          class="w-full p-3 text-sm font-bold tracking-wide rounded disabled:opacity-75 bg-tuscany text-white focus:shadow-outline hover:bg-pastel-pink">Enviar
          mensagem</button>
      </form>
    </div>

    <Divider type="floral" />

    <h2 class="title">Mensagens recebidas</h2>

    <ClientOnly>
      <div v-for="message in messagesData.data" :key="message"
        class="grid max-w-screen-sm grid-cols-1 py-16 text-gray-700 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 dark:text-gray-100">
        <div class="relative text-center text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            class="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
            <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
            <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
          </svg>
          <p class="px-6 py-1 text-lg italic ">{{ message.message }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            class="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
            <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
            <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
          </svg>
        </div>
        <span class="w-12 h-1 my-2 rounded-lg dark:bg-tuscany"></span>
        <p class="font-bold text-gray-700">{{ message.name }} - {{ formatDate(message.created_at) }}</p>
      </div>
    </ClientOnly>

    <Modal :show="showModal" :show-actions="false" @toggle-modal="toggleModal">
      <div v-if="returnType === 'success'"
        class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
        <svg class="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <div v-else class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100">
        <svg class="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>

      <p class="my-6 font-bold">{{ backendMessage }}</p>
    </Modal>
  </div>
</template>

<script setup>
import spacetime from 'spacetime'

const { fetchApi } = useApi()

const maxCharacters = ref(2000)
const turnstile = ref()
let form = ref({
  name: '',
  email: '',
  message: ''
})
let token = ref('')
let showModal = ref(false)
let returnType = ref('success')
let backendMessage = ref('')

const { data: messagesData, refresh } = await useAsyncData('mountains', () => fetchApi('/message'))

// computed
const remainingCharacters = computed(() => {
  return maxCharacters.value - form.value.message.length
})

const disabledButton = computed(() => {
  const values = Object.values(form.value);
  const allFieldsFilled = values.every(field => field.trim() !== '');

  return allFieldsFilled && !!token.value
})

// method
const formatDate = (date) => {
  return spacetime(date).format('numeric-uk')
}

const checkMessageLength = () => {
  if (form.value.message.length > maxCharacters.value) {
    form.value.message = form.value.message.substr(0, maxCharacters.value); // Limita o tamanho do texto
  }
}

const reset = () => {
  turnstile.value.reset()
}

const sendMessage = async () => {
  const localForm = { ...form.value }
  returnType.value = 'success'

  if (!token.value) return

  const { data } = await useFetch('/_turnstile/validate', {
    method: 'POST',
    body: {
      token: token.value,
    }
  })

  if (data.value.success) {
    const { data, error, message } = await fetchApi('/message', {
      method: 'POST',
      body: localForm
    })

    if (error) {
      returnType.value = 'error'
      backendMessage.value = message
    }
    else {
      refresh()
      backendMessage.value = data.message
    }

    showModal.value = true
  }
}

const toggleModal = () => {
  reset()
  showModal.value = !showModal.value
  returnType.value = 'success'

  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
}
</style>
