<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div v-for="(achievement) in achievements" :key="achievement">
      <div class="bg-white rounded shadow p-4" :class="userHasAchievement(achievement._id)">
        <h3 class="font-bold text-xl">{{ achievement.name }}</h3>
        <img :src="achievement.image" alt="Imagem da conquista" class="w-full h-32 object-cover mt-2 mb-4">
        <p c>{{ achievement.description }}</p>

        <span 
          v-if="!userHasAchievement(achievement._id)"
          class="text-yellow-500"
        >
          Desbloqueado
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth-only'],
  layout: 'admin'
})
const { userAchievements } = userStore()
const auth = useCookie('auth')
const { fetchApi } = useApi()

// datas
let achievements = ref([])

// computeds
const userHasAchievement = (id) => {
  return userAchievements.some(userAchievement => userAchievement._id === id) ? '' : 'opacity-50 '
}

const { data, error } = await fetchApi('/achievements', {
  method: 'GET',
  headers: { 'x-access-token': auth.value }
})

if(!error) {
  achievements.value = data.achievements
} else {
  achievements.value = []
}
</script>
