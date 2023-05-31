<template>
  <div v-if="position === 'left'" class="grid grid-cols-2">
    <div class="h-auto bg-cover bg-center" :style="backgroundStyle"></div>
    <div class="p-8">
      <div class="mt-8 mb-8">
        <h1 class="text-2xl font-black uppercase text-right mb-2">{{ name }}</h1>
        <p class="text-right descripiton text-lg">
          {{ description }}
        </p>
      </div>
    </div>
  </div>

  <div v-else class="grid grid-cols-2">
    <div class="p-8">
      <div class="mt-8 mb-8">
        <h1 class="text-2xl font-black uppercase text-left mb-2">{{ name }}</h1>
        <p class="text-left descripiton text-lg">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="h-auto bg-cover bg-center" :style="backgroundStyle" />
  </div>
</template>

<script setup>
// props
const props = defineProps({
  position: {
    type: String, default: 'left',
    validator(value) {
      return ['left', 'right'].includes(value)
    }
  },
  description: String,
  name: String,
  image: { type: String, default: '' },
  size: { type: String, default: 'cover' },
  position: { type: String, default: 'center' }
})

// computeds
const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${props.image})`,
    backgroundSize: props.size,
    backgroundRepeat: 'no-repeat',
    'background-position-y': props.position
  }
})
</script>

<style scoped>
@media (max-width: 767px) {
  .grid {
    display: block;
  }

  .bg-cover {
    height: 200px;
    /* ou outra altura desejada */
  }
}

.descripiton {
  font-weight: 300;
  line-height: 2;
  letter-spacing: 1px;
}
</style>
