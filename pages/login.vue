<template>
  <div class="h-screen flex bg-white text-slate-900 items-center justify-center">
    <div class="w-screen sm:w-11/12 lg:w-1/2">
      <div class="px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2 class="text-center text-4xl font-display font-semibold lg:text-left xl:text-5xl
            xl:text-bold">
          Entrar
        </h2>

        <div class="mt-12">
          <form @submit.prevent="onSubmit">
            <label class="font-medium block mb-1 mt-6 text-gray-700">
              E-mail
            </label>

            <div class="relative w-full">
              <input
                v-model="form.email"
                class="w-full py-3 px-3 text-lg rounded border border-tuscany"
                type="text"
                placeholder="Informe seu e-mail"
              />
            </div>

            <label class="font-medium block mb-1 mt-6 text-gray-700" for="password">
              Senha
            </label>

            <div class="relative w-full">
              <div class="absolute inset-y-0 right-0 flex items-center px-2">
                <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
                <label
                  class="bg-tuscany hover:bg-gray-400 rounded px-2 py-1 text-sm text-white font-mono cursor-pointer js-password-label"
                  for="toggle"
                  @click="toggleShowPassword"
                >
                  {{ showPasswordText }}
                </label>
              </div>

              <input
                v-model="form.password"
                class="w-full py-3 px-3 text-lg rounded border border-tuscany"
                :type="passwordInputType"
                placeholder="Informe sua senha"
                autocomplete="off"/>
            </div>
 
            <div class="mt-10">
              <button
                class="disabled:opacity-25 bg-tuscany p-4 w-full rounded-full text-white font-semibold focus:shadow-outline hover:bg-pastel-pink"
                type="submit" :disabled="!isComplete">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex items-center justify-center relative flex-1 h-screen"
      style="border-radius: 130px 0 0 130px;">
      <div class="overlay"></div>

      <NuxtLink to="/" class="cursor-pointer bt-back">Voltar ao Início</NuxtLink>

      <nuxt-img
        format="webp"
        class="image"
        src="https://wedding-felipe-tatiana.s3.sa-east-1.amazonaws.com/DJI_0317.JPG"
        alt="Cover login image"
        title="Cover login image"
        width="692"
        height="270"
        sizes="sm:100vw md:100vw lg:100vw"
      />
    </div>
  </div>
</template>

<script setup>
import getSiteMeta from '@/utils/getSiteMeta'
import { useRouter } from 'vue-router'

const store = userStore()
const config = useRuntimeConfig()
const router = useRouter()
const cookie = useCookie('auth')

const { fetchApi } = useApi()

// configs
definePageMeta({
  middleware: ['guest-only'],
  layout: false
})

// datas
const form = reactive({
  email: '',
  password: '',
})
let showPassword = ref(false)
let passwordInputType = ref('password')

// computeds
const meta = computed(() => {
  const metaData = {
    url: `${config.baseUrl}/login`
  }

  return getSiteMeta(metaData)
})

const isComplete = computed(() => {
  return Object.values(form).every(val => val)
})

const showPasswordText = computed(() => {
  return showPassword.value ? 'esconder' : 'mostrar'
})


useHead({
  title: 'Insira seu e-mail e senha para acessar seu site',
  meta: () => [...meta.value]
})

// watchers 
watch(showPassword, (value) => {
  passwordInputType.value = 'password'
  if (value) passwordInputType.value = 'text'
})

// methods
const onSubmit = async () => {
  const formCopy = { ...form }

  const { data, error } = await fetchApi('/users/authenticate', {
    method: 'POST',
    body: formCopy
  })

  if (!error) {
    const id = data.data.id
    const token = data.token

    //configurando token
    cookie.value = await token

    const { data: userData } = await fetchApi(`/users/${id}`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })

    store.setUser(userData)

    router.push({ path: '/dashboard' })
  }
}
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style >
.image {
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 90px 0 0 90px;
}

.overlay {
  position: absolute;
  top: -5px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0000007d;
  z-index: 3;
  /* border-radius: 90px 0 0 90px; */
  border-radius: 100px 0 0 87px;
}

.bt-back {
  position: absolute;
  color: white !important;
  z-index: 200;
  top: 37px;
}
</style>
