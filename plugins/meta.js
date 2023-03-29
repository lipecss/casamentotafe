export default (meta) => {
  const head = document.querySelector('head')

  console.log('aaa', head)
  // Remove as meta tags antigas
  const existingMetaTags = head.querySelectorAll('meta')
  console.log('existingMetaTags', existingMetaTags)
  existingMetaTags.forEach((tag) => {
    if (tag.getAttribute('data-n-head') === 'ssr') {
      return
    }
    head.removeChild(tag)
  })
}
