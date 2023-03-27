<template>
  <div class="mt-4 md:mt-0 map-popup">
    <div class="uppercase tracking-wide text-sm text-pastel-pink font-bold mb-5">
      <span>{{ title }}</span>
    </div>

    <nuxt-link 
      to="https://www.google.com/maps/place/Monte+Millazzo/@-23.3755959,-46.308824,18z/data=!4m6!3m5!1s0x94ce874fda6a0f9b:0x8fc9c9bfdc4e6eaa!8m2!3d-23.3760606!4d-46.3085915!16s%2Fg%2F11js2nxqbx"
      target="_blank"
      >
      <span class="text-sm text-gray-900">Rua Paulo Antônio, R. Paulo A Barbosa, 290 - Jardim Aruja, Arujá - SP, 07407-375</span>
    </nuxt-link>x

    <p class="mt-2 text-gray-600 text-justify">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
// props
const props = defineProps({ 
  title: { type: String, default: 'Monte Millazzo' },
  description: { type: String, default: '' }
})
</script>

<style lang="scss">
.map-popup {
  max-height: 225px;
  overflow: auto;
}

.mapboxgl-popup {
  max-width: 282px !important;
}
</style>
