<template>
  <Navbar :position="position"/>
  <div class="content">
    <slot />
  </div>
  <Footer/>
</template>

<script setup>
const position = ref(0)

let globalPosition = useScrollPosition()

function logScroll() {
  position.value = Math.round(window.scrollY)
  globalPosition.value = Math.round(window.scrollY)
}

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
