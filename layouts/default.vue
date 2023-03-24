<template>
  <Navbar :position="position"/>
  <div class="content" :class="paddingContent">
    <slot />
  </div>
  <Footer/>
</template>

<script setup>
const position = ref(0)

// lyfecicle
onMounted(() => {
  window.addEventListener('scroll', logScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', logScroll)
})

let globalPosition = useScrollPosition()

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
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}
</style>
