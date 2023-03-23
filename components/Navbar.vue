<template>
  <nav class="bg-white py-7 mx-auto flex flex-col items-center z-50 justify-between fixed w-full z-10 top-0">
    <Transition name="slide">
      <div v-if="showTitle" class="text-center pb-3 block">
        <h6 class="title">Tatiana e Felipe</h6>
      </div>
    </Transition>

    <div class="flex flex-grow space-x-1">
      <div class="hidden md:block">
        <NuxtLink 
          v-for="(menu, index) in menuList" :key="index" 
          :to="menu.path" class="px-2 text-gray-400 hover:text-tuscany">
          {{ menu.text }}
        </NuxtLink>      
      </div>

      <div @click="toggleNav" class="flex md:hidden">
        <button
          type="button"
          class="
          text-gray-800
          hover:text-gray-400
          focus:outline-none focus:text-gray-400
          "
        >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
               d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul 
      :class="showMenu ? 'flex' : 'hidden'"
      class="
        md:hidden
        flex-col
        mt-8
        space-y-4
        flex
        flex-row
        items-center
        "
      >
        <li v-for="(menu, index) in menuList" :key="index">
          <NuxtLink :to="menu.path" class="px-2 text-gray-400 hover:text-tuscany">
            {{ menu.text }}
          </NuxtLink>   
        </li>
    </ul>
  </nav>
</template>

<script setup>
// props
const props = defineProps({ position: Number })

const route = useRoute()

// watchers 
watch(route, () => {
  if (showMenu) showMenu.value = false
})

// datas
const showMenu = ref(false)

const menuList = reactive([
  { path: '/', text: 'Inicio'},
  { path: '/padrinhos', text: 'Padrinhos'},
  { path: '/cerimonia', text: 'Cerimônia & Festa'},
  { path: '/rsvp', text: 'RSVP'},
  { path: '/login', text: 'Login'}
])

// computeds
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
