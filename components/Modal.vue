<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div
        v-show="isOpen"
        class="
          fixed
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        "
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl" style="min-width: 403px;">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">{{ title }}</h3>
            <svg
              @click="emitToggleModal(false)"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 ml-6 text-red-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div class="mt-4">
            <div class="text-center place-items-center my-6 modal-content">
              <slot />
            </div>

            <div v-if="showActions">
              <button
                @click="emitToggleModal(false)"
                class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
              >
                Cancel
              </button>

              <button class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// props
const props = defineProps({ 
  show: { type: Boolean, default: false },
  title: { type: String, default: '' },
  showActions: { type: Boolean, default: true }
})
let isOpen = ref(true)

// watchers 
watch(() => props.show, (value) => {
  isOpen.value = value
}, { immediate: true })

const emit = defineEmits(['toggle-modal'])

// methods
const emitToggleModal = () => {
  emit('toggle-modal')
}
</script>

<style lang="scss" scoped>
.modal-content {
  overflow: auto;
  max-height: 381px;
}
</style>
