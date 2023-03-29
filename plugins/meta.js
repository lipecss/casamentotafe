export default (meta) => {
  const head = document.querySelector('head')

  // Remove as meta tags antigas
  const existingMetaTags = head.querySelectorAll('[data-n-head]')
  existingMetaTags.forEach((tag) => {
    if (tag.getAttribute('data-n-head') === 'ssr') {
      return
    }
    head.removeChild(tag)
  })

  // Adiciona as novas meta tags
  return [
    // suas novas meta tags aqui...
  ]
}
