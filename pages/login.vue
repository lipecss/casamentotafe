<template>
  <div class="lg:flex bg-white text-slate-900">
    <div class="lg:w-1/2 ">
      <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl ">
        <h2 class="text-center text-4xl font-display font-semibold lg:text-left xl:text-5xl
        xl:text-bold">
          Entrar
        </h2>

        <div class="mt-12">
          <form @submit.prevent="onSubmit">
            <div>
                <div>
                  Email Address
                </div>
                <input
                  v-model="form.email"
                  class="w-full text-lg py-2 rounded border border-tuscany"
                  type="email"
                  required
                  placeholder="Informe seu e-mail"
                >
            </div>

            <div class="mt-8">
                <div>
                  <div>
                    Password
                  </div>
                </div>

                <input
                  v-model="form.password"
                  class="w-full text-lg py-2 rounded border border-tuscany"
                  type="password"
                  required
                  placeholder="Digite sua senha"
                >
            </div>

            <div class="mt-10">
              <button 
                class="disabled:opacity-25 bg-tuscany p-4 w-full rounded-full text-white font-semibold focus:shadow-outline hover:bg-pastel-pink"
                type="submit"
                :disabled="!isComplete"
                >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex items-center justify-center relative bg-tuscany flex-1 h-screen" style="border-radius: 130px 0 0 130px;">
      <div class="overlay"></div>

      <NuxtLink to="/" class="bt-back">Voltar ao Início</NuxtLink>

      <img 
        class="image"
        src="https://www.casar.com/_nuxt/img/assets/images/foto-franco-rossi-12-50d85bf.webp"
        alt="Cover login image"
        title="Cover login image"
      >
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const store = userStore()

const router = useRouter()
// const userCookie = useCookie('userInfo')
const cookie = useCookie('auth')

const { fetchApi } = useApi()

// configs
definePageMeta({
  middleware: ['guest-only'],
  layout: false
})

// datas
const form = reactive({
  email: 'john_doe@example.com',
  password: '123456',
})

// computeds
const isComplete = computed(() => {
  return Object.values(form).every(val => val)
})

// methods
const onSubmit = async () => {
  const { data, error } = await fetchApi('/users/authenticate', {
    method: 'POST',
    body: form
  })

  if (!error.value) {
    const value = data.value

    const id = value.data.id
    const token = value.token
    
    //configurando token
    cookie.value = await token

    const { data: userData } = await fetchApi(`/users/${id}`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })

    store.setUser(userData.value)

    router.push({ path: '/dashboard'})
  }
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
