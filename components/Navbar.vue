<template>
  <nav class="bg-white py-7 mx-auto flex flex-col items-center z-50 justify-between fixed w-full top-0">
    <Transition name="slide">
      <div v-if="showTitle" class="text-center pb-3 block">
        <h6 class="title">Tatiana e Felipe</h6>
      </div>
    </Transition>

    <div class="flex flex-grow space-x-1">
      <div class="hidden md:block">
        <NuxtLink v-for="(menu, index) in menuList" :key="index" :to="menu.path" class="px-2 text-gray-700">
          <span class="hover:text-tuscany">
            {{ menu.text }}
          </span>

          <ClientOnly>
            <span v-if="!menu.show" class="relative text-lg">
              <button class="inline-flex items-center text-gray-700 hover:text-tuscany"
                @click="isOptionsExpanded = !isOptionsExpanded" @blur="isOptionsExpanded = false">
                <span class="text-gray-700 text-base hover:text-tuscany">Cerimônia</span>
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
                  class="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden"
                  style="width: 150px;">
                  <li v-for="(option, index) in cerimoniaList" :key="index"
                    class="transition-colors duration-300 hover:bg-gray-200 w-full h-full">
                    <NuxtLink :to="option.path" class="divide-y divide-gray-600 hover:text-tuscany">
                      <span class="block px-3 py-2 w-full h-full text-base">{{ option.text }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </transition>
            </span>
          </ClientOnly>
        </NuxtLink>

        <NuxtLink v-if="!isAuthenticated" to="/login" class="px-2 text-gray-700 hover:text-tuscany">
          Logar
        </NuxtLink>

        <NuxtLink v-else to="/dashboard" class="px-2 text-gray-700 hover:text-tuscany">
          Dashboard
        </NuxtLink>
      </div>

      <div @click="toggleNav" class="flex md:hidden">
        <button type="button"
          class="
                                                                                                                                                   ">
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul :class="showMenu ? 'flex' : 'hidden'" class="md:hidden flex-col mt-8 space-y-4 flex items-center">
      <li v-for="(menu, index) in menuList" :key="index">
        <NuxtLink :to="menu.path" class="px-2 text-gray-700">
          <span class="hover:text-tuscany">
            {{ menu.text }}
          </span>

          <ClientOnly>
            <span v-if="!menu.show" class="relative text-lg">
              <button class="inline-flex items-center text-gray-700 hover:text-tuscany"
                @click="isOptionsExpanded = !isOptionsExpanded" @blur="isOptionsExpanded = false">
                <span class="text-gray-700 text-base hover:text-tuscany">Cerimônia</span>
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
                  class="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden"
                  style="width: 150px;">
                  <li v-for="(option, index) in cerimoniaList" :key="index"
                    class="transition-colors duration-300 hover:bg-gray-200 w-full h-full">
                    <NuxtLink :to="option.path" class="divide-y divide-gray-600 hover:text-tuscany">
                      <span class="block px-3 py-2 w-full h-full text-base">{{ option.text }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </transition>
            </span>
          </ClientOnly>
        </NuxtLink>
      </li>

      <li v-if="!isAuthenticated">
        <NuxtLink to="/login" class="px-2 text-gray-700 hover:text-tuscany">
          Logar
        </NuxtLink>
      </li>

      <li v-else>
        <NuxtLink to="/dashboard" class="px-2 text-gray-700 hover:text-tuscany">
          Dashboard
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
// props
const props = defineProps({ position: Number })

const route = useRoute()
const { isAuthenticated } = useAuth()

// watchers 
watch(route, () => {
  if (showMenu) showMenu.value = false
})

// datas
const showMenu = ref(false)
const isOptionsExpanded = ref(false)

const menuList = reactive([
  { path: '/', text: 'Inicio', show: true },
  { path: '/pais', text: 'Pais', show: true },
  { path: '/padrinhos', text: 'Padrinhos', show: true },
  { path: '', text: '', show: false },
  { path: '/presentes', text: 'Presentes', show: true },
  { path: '/message', text: 'Mensagens aos noivos', show: true },
  { path: '/rsvp', text: 'RSVP', show: true }
])

const cerimoniaList = ref([
  { path: '/buffet', text: 'Buffet' },
  { path: '/cerimonia', text: 'Cerimônia & Festa' },
  { path: '/pre-wedding', text: 'Pré Wedding' },
])

// computed
const showTitle = computed(() => {
  return props.position < 50
})

// methods
const toggleNav = () => (showMenu.value = !showMenu.value)
</script>

<style lang="scss" scoped>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.ease-custom {
  transition-timing-function: cubic-bezier(.61, -0.53, .43, 1.43);
}
</style>
