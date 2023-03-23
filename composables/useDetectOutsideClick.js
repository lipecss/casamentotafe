import { onBeforeUnmount, onMounted, toRef, watch } from 'vue'

export default function useDetectOutsideClick(component, callback) {
  const componentRef = toRef(component, 'el')

  const listener = (event) => {
    const clickedInside = componentRef.value && componentRef.value.contains(event.target)
    if (clickedInside) {
      return
    }
    if (typeof callback === 'function') {
      callback()
    }
  }

  watch(componentRef, (newValue, oldValue) => {
    if (newValue) {
      window.addEventListener('click', listener)
    } else {
      window.removeEventListener('click', listener)
    }
  })

  onBeforeUnmount(() => { window.removeEventListener('click', listener) })

  return { listener }
}
