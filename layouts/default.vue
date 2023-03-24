<template>
  <Navbar :position="position"/>
  <div class="content paper-bg" :class="paddingContent">
    <slot />

    <Footer/>
  </div>
</template>

<script setup>

// lyfecicle
onMounted(() => {
  window.addEventListener('scroll', logScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', logScroll)
})

let globalPosition = useScrollPosition()

// datas
const position = ref(0)

// computeds
const paddingContent = computed(() => {
  return globalPosition.value > 30 ? 'pt-52' : 'pt-48'
})

// methods
const logScroll = () => {
  position.value = Math.round(window.scrollY)
  globalPosition.value = Math.round(window.scrollY)
}
</script>

<style>
.content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
