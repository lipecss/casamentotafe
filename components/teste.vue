<template>
  <div class="mt-4 md:mt-0">
    <div class="uppercase tracking-wide text-sm text-purple-600 font-bold">
      Marketing
    </div>

    <p class="mt-2 text-gray-600 text-justify">
      {{ title }}
    </p>
  </div>
</template>

<script setup>
// props
const props = defineProps({ title: '', default: 'aaaaaaaaaaaa' })
</script>
