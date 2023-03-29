<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <div v-for="(achievement) in achievements" :key="achievement">
      <div class="bg-white h-full rounded-md" :class="userHasAchievement(achievement._id)">
        <div class="flex justify-center items-center leading-none">
          <img
          :src="achievement.image"
            alt="pic"
            class="h-32 w-32 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
          />
        </div>
        <div class="p-3 h-full">
          <h3 class="font-bold my-3">{{ achievement.name }}</h3>
          <p class="text-gray-600">{{ achievement.description }}</p>
          <p 
            v-if="!userHasAchievement(achievement._id)"
            class="text-yellow-500 my-6"
          >
            Desbloqueado
          </p>
        </div>
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
