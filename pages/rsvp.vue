<template>
  <div>
    <div class="text-center place-items-center">
      <p class="subtitle mt-12">
        Confirmação de presença
      </p>

      <h1 class="text-2xl md:text-2xl font-medium mb-2">
        Faça parte da nossa história de amor, confirme sua presença.
      </h1>
    </div>

    <div class="flex justify-center">
      <div class="w-full max-w-xs md:max-w-lg lg:max-w-3xl mx-auto">
        <div class="bg-slate-50 shadow-md rounded px-5 pt-5 pb-8 mb-4 my-24">
          <p class="text-center place-items-center">
            Insira o seu email abaixo.
          </p>

          <p>
            Se estiver respondendo por você e um convidado (ou sua família), você poderá confirmar presença para todo o
            grupo aqui.
          </p>
          <div class="flex items-center justify-center">
            <form class="flex flex-col items-center justify-center" style="width: 300px;" @submit.prevent="onSubmit">
              <div class="w-full my-4">
                <input 
                  v-model="form.rsvp_code"
                  required
                  class="form-select block mt-1 uppercase py-2 px-4 text-base text-gray-700 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:shadow-outline w-full"
                  placeholder="Informe o seu e-mail"
                  @keydown="onChangeRsvpCode($event)"
                >
              </div>

              <div class="flex flex-col md:flex-row justify-between md:items-center w-full mb-4">
                <label class="block text-gray-700 font-bold mr-3">Você irá ao evento?</label>

                <div class="flex items-center">
                  <label class="inline-flex items-center">
                    <input type="radio" class="form-radio h-5 w-5 text-gray-600" name="attend" v-model="form.will_attend"
                      value="true">
                    <span class="ml-2 text-gray-700">Sim</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input type="radio" class="form-radio h-5 w-5 text-gray-600" name="attend" v-model="form.will_attend"
                      :value="form.will_attend" required>
                    <span class="ml-2 text-gray-700">Não</span>
                  </label>
                </div>
              </div>

              <div class="flex flex-col md:flex-row md:items-center w-full mb-4">
                <label class="w-full pr-4 text-gray-700 font-bold">Total de adultos</label>
                <select v-model="form.guests"
                  class="form-select block md:w-16 mt-1 py-2 px-4 text-base text-gray-700 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:shadow-outline"
                  required>
                  <option :selected="(n - 1) === form.guests" v-for="n in 11" :value="n - 1" :key="n">{{ n - 1 }}</option>
                </select>
              </div>

              <div class="flex flex-col md:flex-row md:items-center w-full mb-6">
                <label class="w-full pr-4 text-gray-700 font-bold">Total de crianças</label>
                <select v-model="form.kids"
                  class="form-select block md:w-16 mt-1 py-2 px-4 text-base text-gray-700 bg-transparent border border-gray-400 appearance-none focus:outline-none focus:shadow-outline"
                  required>
                  <option :selected="(n - 1) === form.kids" v-for="n in 11" :value="n - 1" :key="n">{{ n - 1 }}</option>
                </select>
              </div>

              <button
                class="disabled:opacity-25 text-center place-items-center text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:border-gray-700"
                :disabled="!isFormValid" type="submit">
                Confirmar presença
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block fixed right-0 top-60">
      <img src="https://images.zola.com/5d5bd448-8081-450b-ab17-8061a10589c9" alt="Right garland" title="Right garland"
        width="117" class="">
    </div>
  </div>

  <Modal :show="showModal" :show-actions="false" @toggle-modal="toggleModal">
    <div v-if="returnType === 'success'" class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
      <svg class="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>

    <div v-else class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100">
      <svg class="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </div>

    <p class="my-6 font-bold">{{ backendMessage }}</p>
  </Modal>
</template>

<script setup>
definePageMeta({
  middleware: ['general']
})

const { fetchApi } = useApi()

//datas
let returnType = ref('success')
let backendMessage = ref('')
let showModal = ref(false)
let form = reactive({
  rsvp_code: '',
  will_attend: true,
  guests: 0,
  kids: 0
})

// computeds
const isFormValid = computed(() => {
  return form.rsvp_code && form.rsvp_code.length === 8
})

// methods
const toggleModal = () => {
  showModal.value = !showModal.value
  backendMessage.value = 'success'
  form = {
    rsvp_code: '',
    will_attend: true,
    guests: 0,
    kids: 0
  }
}

const onSubmit = async () => {
  const { data, error, message } = await fetchApi('/rsvp', { 
    method: 'POST',
    body: form
  })

  if (error) {
    returnType.value = 'error'
    backendMessage.value = message
  } else {
    backendMessage.value = data.message
  }

  showModal.value = true
}

const onChangeRsvpCode = (e) => {
  const length = e.target.value.length
  const isDeleteKey = e.keyCode === 8 || e.keyCode === 46

  if (length >= 8 && !isDeleteKey) e.preventDefault()
}
</script>
