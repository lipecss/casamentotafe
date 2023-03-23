<template>
  <div v-if="position === 'left'" class="grid grid-cols-2">
    <div class="h-auto bg-cover bg-center" :style="backgroundStyle"></div>
      <div class="p-8">
        <div class="mt-8 mb-8">
      <h1 class="text-2xl font-black uppercase text-right mb-2">{{ title }}</h1>
      <p class="text-right">
        {{  description }}
      </p>
        </div>
    </div>
  </div>

  <div v-else class="grid grid-cols-2">
    <div class="p-8">
      <div class="mt-8 mb-8">
        <h1 class="text-2xl font-black uppercase text-left mb-2">{{ title }}</h1>
        <p class="text-left">
          {{  description }}
        </p>
      </div>
    </div>

    <div class="h-auto bg-cover bg-center" :style="backgroundStyle"/>
  </div>
</template>

<script setup>
const images = import.meta.glob('~/assets/img/padrinhos/*', { eager: true })

// props
const props = defineProps({ 
  position: { 
    type: String , default: 'left',
    validator(value) {
      return ['left', 'right'].includes(value)
    }
  },
  description: String,
  title: String,
  filename: { type: String, default: '' },
  filePosition: { type: String, default: 'center' }
})

// datas
const image = ref(null)

// computeds
const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${image.value})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    'background-position-y': props.filePosition
  }
})

// methods 
function findImage() {
  const imageName = props.filename.split('.')[0]

  const extensions = ['png', 'jpg', 'jpeg', 'gif']
  for (const ext of extensions) {
    const key = `/assets/img/padrinhos/${imageName}.${ext}`
    if (images[key]) {
      image.value = images[key].default
      break
    }
  }
}


if (props.filename) {
  findImage()
}
// const image = ref(images.value[props.filename])
</script>

<style scoped>
@media (max-width: 767px) {
  .grid {
    display: block;
  }
  .bg-cover {
    height: 200px; /* ou outra altura desejada */
  }
}
</style>
