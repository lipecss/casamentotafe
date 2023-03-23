<template>
  <div>
    Profile
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth-only'],
  layout: 'admin'
})
</script>
