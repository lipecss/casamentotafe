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

// lifecycle
onBeforeMount(() => { setApiPending(true) })

onBeforeRouteLeave(() => { setApiPending(true) })

const { userAchievements } = userStore()
const auth = useCookie('auth')
const { fetchApi } = useApi()
const config = useRuntimeConfig()
const { setApiPending } = statusStore()

// datas
let achievements = ref([])

// computeds
const meta = computed(() => {
  const metaData = {
    title: 'Suas conquistas',
    url: `${config.baseUrl}/dashboard/conquistas`
  }

  return getSiteMeta(metaData)
})

const userHasAchievement = (id) => {
  return userAchievements.some(userAchievement => userAchievement._id === id) ? '' : 'opacity-50 '
}

const { data, error } = await fetchApi('/achievements', {
  method: 'GET',
  headers: { 'x-access-token': auth.value }
})

useHead({
  title: 'Suas conquistas',
  meta: () => [...meta.value]
})

if(!error) {
  achievements.value = data.achievements
} else {
  achievements.value = []
}

setTimeout(() => { setApiPending(false) }, 1500)

</script>
