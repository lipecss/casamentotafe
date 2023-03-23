<template>
  <div>
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between mr-6">
      <h1 class="text-xl md:text-4xl mb-2">
        Olá <span class="font-semibold">{{ currentUser.username }}</span>
      </h1>
    </div>

    <div class="my-12">
      <p class="text-lg my-4">Estamos muito felizes em recebê-los em nossa página de dashboard! Agradecemos do fundo do coração por terem dedicado seu tempo para nos prestigiar em nosso grande dia.</p>

      <p class="text-lg">Aqui, vocês terão acesso algumas informações exclusivas. Esperamos que esta página facilite sua experiência e torne sua visita ainda mais agradável.</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth-only'],
  layout: 'admin'
})
const { currentUser } = userStore()

// computeds
const activeMessage = computed(() => currentUser.activated ? 'Ativo' : 'Inativo')
const activeMessageColor = computed(() => currentUser.activated ? 'text-emerald-400' : 'text-red-400')
</script>
