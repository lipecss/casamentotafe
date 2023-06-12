<template>
  <nav class="bg-white py-7 mx-auto flex flex-col items-center z-50 justify-between fixed w-full top-0">
    <Transition name="slide">
      <div v-if="showTitle" class="text-center pb-3 block">
        <h6 class="title">Tatiana e Felipe</h6>
      </div>
    </Transition>

    <div class="flex flex-grow space-x-1">
      <div class="hidden md:block">
        <NuxtLink v-for="(menu, index) in menuList" :key="index" :to="menu.path"
          class="px-2 text-gray-700 hover:text-tuscany">
          {{ menu.text }}
        </NuxtLink>

        <NuxtLink v-if="!isAuthenticated" to="/login" class="px-2 text-gray-700 hover:text-tuscany">
          Logar
        </NuxtLink>

        <NuxtLink v-else to="/dashboard" class="px-2 text-gray-700 hover:text-tuscany">
          Dashboard
        </NuxtLink>
      </div>

      <div @click="toggleNav" class="flex md:hidden">
        <button type="button" class="
                      text-gray-800
                      hover:text-gray-700
                      focus:outline-none focus:text-gray-700
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
        <NuxtLink :to="menu.path" class="px-2 text-gray-700 hover:text-tuscany">
          {{ menu.text }}
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

const menuList = reactive([
  { path: '/', text: 'Inicio' },
  { path: '/padrinhos', text: 'Padrinhos' },
  { path: '/buffet', text: 'Buffet' },
  { path: '/cerimonia', text: 'Cerimônia & Festa' },
  { path: '/presentes', text: 'Presentes' },
  { path: '/message', text: 'Mensagens ao noivos' },
  { path: '/rsvp', text: 'RSVP' }
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
</style>
