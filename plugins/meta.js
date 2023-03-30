export default (meta) => {
  const head = document.querySelector('head')

  // Remove as meta tags antigas
  const existingMetaTags = head.querySelectorAll('meta')

  existingMetaTags.forEach((tag) => {
    if (tag.getAttribute('data-n-head') === 'ssr') {
      return
    }
    head.removeChild(tag)
  })
}
