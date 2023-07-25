<template>
  <div>
    <div class="flex justify-center">
      <div class="w-full max-w-xs md:max-w-lg lg:max-w-3xl mx-auto">
        <div class="px-5 pt-5 pb-8 mb-4 my-6">
          <p class="title text-center mb-6">Confirmação de presença</p>

          <p class="text-lg">
            Confirme sua presença e de toda sua família. Isso nos ajudará muito no grande dia e com tudo que preparamos
            para vocês!
          </p>

          <div class="flex items-center justify-center mt-2">
            <form class="flex flex-col items-center justify-center" style="width: 300px;" @submit.prevent="onSubmit">
              <div class="w-full my-4">
                <input v-model="form.rsvp_code" required
                  class="mt-1 py-2 px-4 text-base bg-transparent border border-tuscany appearance-none focus:outline-none focus:shadow-outline w-full"
                  placeholder="Informe o seu código" @input="onChangeRsvpCode($event)">
              </div>

              <div class="flex flex-col md:flex-row justify-between md:items-center w-full mb-4">
                <label class="block text-gray-700 font-bold mr-3">Você irá ao evento?</label>

                <div class="flex items-center">
                  <label class="inline-flex items-center">
                    <input type="radio" class="form-radio bg-transparent h-5 w-5 text-gray-600" name="attend"
                      v-model="form.will_attend" value="true">
                    <span class="ml-2 text-gray-700">Sim</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input type="radio" class="form-radio bg-transparent h-5 w-5 text-gray-600" name="attend"
                      v-model="form.will_attend" :value="form.will_attend" required>
                    <span class="ml-2 text-gray-700">Não</span>
                  </label>
                </div>
              </div>

              <div class="flex flex-col md:flex-row md:items-center w-full mb-4">
                <label class="w-full pr-4 text-gray-700 font-bold">Total de adultos</label>
                <select v-model="form.guests"
                  class="form-select block md:w-16 mt-1 py-2 px-4 text-base text-gray-700 bg-transparent border border-tuscany appearance-none focus:outline-none focus:shadow-outline"
                  required>
                  <option :selected="(n - 1) === form.guests" v-for="n in 11" :value="n - 1" :key="n">{{ n - 1 }}</option>
                </select>
              </div>

              <div class="flex flex-col md:flex-row md:items-center w-full mb-6">
                <label class="w-full pr-4 text-gray-700 font-bold">Total de crianças</label>
                <select v-model="form.kids"
                  class="form-select block md:w-16 mt-1 py-2 px-4 text-base text-gray-700 bg-transparent border border-tuscany appearance-none focus:outline-none focus:shadow-outline"
                  required>
                  <option :selected="(n - 1) === form.kids" v-for="n in 11" :value="n - 1" :key="n">{{ n - 1 }}</option>
                </select>
              </div>

              <button
                class="disabled:opacity-75 bg-tuscany p-4 w-full rounded-full text-white font-semibold focus:shadow-outline hover:bg-pastel-pink"
                :disabled="!isFormValid" type="submit">
                Confirmar presença
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block fixed right-0 top-60">
      <nuxt-img format="webp" src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/lateral-rosa.png"
        alt="Right garland" title="Right garland" width="117" height="500" layout="responsive"
        sizes="sm:100vw md:50vw lg:400px" />
    </div>
  </div>

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
</template>

<script setup>
import getSiteMeta from '@/utils/getSiteMeta'

definePageMeta({
  middleware: ['general']
})

const config = useRuntimeConfig()

const { fetchApi } = useApi()

//datas
let returnType = ref('success')
let backendMessage = ref('')
let showModal = ref(false)
let form = ref({
  rsvp_code: '',
  will_attend: true,
  guests: 0,
  kids: 0
})

// computeds
const isFormValid = computed(() => {
  return form.value.rsvp_code && form.value.rsvp_code.length === 8 ? true : false
})

const meta = computed(() => {
  const metaData = {
    description: 'Confirme sua presença no nosso casamento e junte-se a nós em uma celebração inesquecível. Será um dia repleto de amor, felicidade e muita emoção. Nosso casamento será realizado no Monte Millazzo, um lugar encantador com vista para as montanhas e um ambiente acolhedor. Não perca a oportunidade de compartilhar esse momento especial conosco. Confirme sua presença agora!',
    url: config.baseUrl
  }

  return getSiteMeta(metaData)
})

useHead({
  title: 'Confirme sua presenção no casamento de Tatiana e Felipe!',
  meta: () => [...meta.value]
})


// methods
const toggleModal = () => {
  showModal.value = !showModal.value
  returnType.value = 'success'

  form.value = {
    rsvp_code: '',
    will_attend: true,
    guests: 0,
    kids: 0
  }
}

const onSubmit = async () => {
  const formCopy = { ...form.value }

  const { data, error, message } = await fetchApi('/rsvp', {
    method: 'POST',
    body: formCopy
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
  form.value.rsvp_code = e.target.value
}
</script>
