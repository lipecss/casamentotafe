<template>
  <div>
    <Navbar :position="position" />
    <div class="content" :class="paddingContent">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
const position = ref(0)

let globalPosition = useScrollPosition()

function logScroll() {
  position.value = Math.round(window.scrollY)
  globalPosition.value = Math.round(window.scrollY)
}

// computeds
const paddingContent = computed(() => {
  return globalPosition.value > 30 ? 'pt-52' : 'pt-48'
})

onMounted(() => {
  window.addEventListener('scroll', logScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', logScroll)
})
</script>

<style>
.content {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}
</style>
