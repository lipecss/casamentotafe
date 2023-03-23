<template>
  <div
    :class="paddingContent"
  >
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
            Se estiver respondendo por você e um convidado (ou sua família), você poderá confirmar presença para todo o grupo aqui.
          </p>

          <div class="flex items-center justify-center">
            <form 
              class="flex flex-col items-center justify-center"
              style="width: 300px;"
              @submit.prevent="onSubmit"
            >
              <input
                v-model="email"
                class="appearance-none border rounded py-2 w-full px-3 focus:outline-none focus:shadow-outline border-blue-500 rounded my-10 shadow bg-gray-100"
                type="email"
                required
                placeholder="Informe o e-mail do cadastro"
              >
              <button 
                class="disabled:opacity-25 text-center place-items-center text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:border-gray-700"
                :disabled="!email ? true : false"        
                type="submit"
              >
                Confirmar presença
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block fixed right-0 top-60">
      <img 
        src="https://images.zola.com/5d5bd448-8081-450b-ab17-8061a10589c9"
        alt="Right garland"
        title="Right garland"
        width="117"
        class=""
      >
    </div>    
  </div>

</template>

<script setup>
definePageMeta({
  middleware: ['general']
})

let globalPosition = useScrollPosition()

//datas
const email = ref('')

const paddingContent = computed(() => {
  return globalPosition.value > 30 ? 'pt-60' : 'pt-40'
})

const onSubmit = () => {
  console.log('aaaa', email)
}

</script>
