<template>
  <div class="flex bg-gray-100 min-h-screen">
    <!-- menu lateral -->
    <aside
      class="hidden md:flex min-h-screen flex flex-col max-w-xs"
      v-if="menu"
    >
      <div
        class="flex-grow flex flex-col justify-between text-gray-500 bg-koamaru"
      >
        <nav class="flex flex-col mx-4 my-6 space-y-4">          
          <NuxtLink
            v-for="(item, index) in menuList" :key="index"
            :to="item.route"
            class="inline-flex items-center py-3 rounded-lg px-2"
            :class="{ 
              'bg-white': routeName === item.name,
              'text-black': routeName === item.name,
              'text-white': routeName !== item.name
            }"
            >
            <svg
              v-if="item.name === 'dashboard'"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              :stroke="svgColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>

            <svg
              v-if="item.name === 'dashboard-profile'"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              :stroke="svgColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

            <svg
              v-if="item.name === 'dashboard-lojinha'"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              :stroke="svgColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
              />
            </svg>
            <span class="ml-2" x-show="menu">{{ item.text }}</span>
          </NuxtLink>
        </nav>
      </div>
    </aside>
    <!-- menu lateral -->

    <div class="flex-grow text-gray-800">
      <!-- menu superior -->
      <header class="flex items-center h-20 px-6 sm:px-10 bg-white">
        <div class="mr-8 cursor-pointer" @click="menu = !menu">
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div 
          class="flex flex-shrink-0 items-center ml-auto"
        >
          <button
            class="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg"
            @click="togglePanel"
          >
            <div
              class="hidden md:flex md:flex-col md:items-end md:leading-tight"
            >
              <span class="font-semibold">{{ currentUser.username }}</span>
              <span class="capitalize text-sm text-gray-600">{{ currentUser.type }}</span>
            </div>
            <span
              class="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden"
            >
              <img
                src="https://randomuser.me/api/portraits/men/68.jpg"
                alt="user profile photo"
                class="h-full w-full object-cover"
              />
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="hidden sm:block h-6 w-6 text-gray-300"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            v-if="panel"
            ref="panelRef"
            class="absolute top-20 right-4 md:right-28 bg-white border rounded-md p-2 w-56 z-50"
            @mouseleave="togglePanel"
          >
            <div class="p-2 hover:bg-blue-100 cursor-pointer">Profile</div>
            <div class="p-2 hover:bg-blue-100 cursor-pointer">Messages</div>
            <div class="p-2 hover:bg-blue-100 cursor-pointer">To-Do's</div>
          </div>

          <div
            v-if="cartMenu"
            ref="cartMenuRef"
            class="absolute top-20 right-0 md:right-20 bg-white border rounded-md p-2 w-80 z-50"
            @mouseleave="toggleCartPanel"
          >
            <ul class="h-72 py-1.5 overflow-y-auto" aria-labelledby="dropdownUsersButton">
              <li v-for="(product, index) in cartList" :key="index">
                <span class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-koamaru dark:hover:text-white">
                  <img 
                    class="w-14 h-10 mr-2 rounded"
                    :src="product.image"
                    :alt="product.description"
                    :title="product.description"
                  >
                  <span class="text-sm">{{ product.description }}</span>

                  <button class="px-2 m-2 text-red-100 transition-colors bg-red-500 rounded-lg"
                    @click="removeToCart(product)"
                  >
                    X
                  </button>
                </span>
              </li>
            </ul>

            <div class="text-center font-bold">
              Total: R$ {{ totalValue }}
            </div>

            <div class="flex justify-between mt-6 mb-3">
              <button class="outline outline-offset-2 hover:text-white py-1 px-1 lg:py-2 lg:px-2 hover:bg-tuscany active:bg-red-500 outline-1"
              @click="clearAndCloseCart"
              >
                Limpar carrinho
              </button>

              <button class="outline outline-offset-2 hover:text-white py-1 px-1 lg:py-2 lg:px-2 hover:bg-tuscany active:bg-red-500 outline-1">Checkout</button>
            </div>
          </div>

          <div 
            class="border-l pl-3 ml-3 space-x-1"
          >
            <button class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
            @click="toggleCartPanel"
            >
              <span
              v-if="totalItems >= 1"
              class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {{ totalItems }}
              </span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" :stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
            </button>

            <!-- logout -->
            <button
              @click="logout"
              class="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                :stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <!-- menu superior -->
      
      <!-- content -->
      <main class="p-6 sm:p-10 space-y-6">
        <section class="">
          <slot />
        </section>
      </main>
      <!-- content -->
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useDetectOutsideClick from '@/composables/useDetectOutsideClick'

const route = useRoute()
const { currentUser } = userStore()
const { logout } = useAuth()
const some = cartStore()

const { removeToCart, clearCart } = some

const { 
  totalItems, 
  cartList, 
  totalValue,
} = storeToRefs(some)

// datas
let panel = ref(false)
const svgColor = ref('#566584')
const currentColor = ref('#2E3C5C')
let menu = ref(true)
let cartMenu = ref(false)

let canClickOut = ref(false)

const menuList = reactive([
  { route: '/', name: 'home', text: 'Inicio'},
  { route: '/dashboard', name: 'dashboard', text: 'Dashboard'},
  { route: '/dashboard/profile', name: 'dashboard-profile', text: 'Perfil'},
  { route: '/dashboard/lojinha', name: 'dashboard-lojinha', text: 'Lojinha'}
])

// computed
const routeName = computed(() => route.name)

// watch
watch(cartMenu, (value) => {
  canClickOut.value = false

  if (value) {
    setTimeout(() => {
      canClickOut.value = true
    }, 500)
  }
})

watch(panel, (value) => {
  canClickOut.value = false

  if (value) {
    setTimeout(() => {
      canClickOut.value = true
    }, 500)
  }
})

watch(totalItems, () => {
  cartMenu.value = false
})

// methods
const togglePanel = () => {
  panel.value = !panel.value
  if (cartMenu) cartMenu.value = false
}

const toggleCartPanel = () => {
  cartMenu.value = !cartMenu.value
  panel.value = false
}

const clearAndCloseCart = () => {
  cartMenu.value = false
  clearCart()
}

useDetectOutsideClick('cartMenuRef', () => { 
  if (canClickOut.value) cartMenu.value = false
})

useDetectOutsideClick('panelRef', () => { 
  if (canClickOut.value) panel.value = false
})
</script>

<style lang="scss" scoped>
</style>
