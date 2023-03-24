<template>
  <section class="w-full max-w-xs md:max-w-lg lg:max-w-6xl mx-auto">
    <section class="mb-2">
      <Map />
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: ["general"],
})

useHead({
  title: 'My App',
  link: [
    // {
    //   rel: 'stylesheet',
    //   href: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',
    //   integrity: 'sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=',
    //   crossorigin: ''
    // },
    // {
    //   rel: 'stylesheet',
    //   href: 'https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css',
    // }
  ],
  script: [
    // {
    //   src: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js',
    //   integrity: 'sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=',
    //   crossorigin: ''
    // },
    // {
    //   src: 'https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js'
    // }
  ]
})
</script>
