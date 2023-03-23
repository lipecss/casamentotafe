export default defineNuxtRouteMiddleware((to, from) => {
  // const cookie = useCookie('auth')
  const { isAuthenticated } = useAuth()

  if (to.path === '/login') {
    return true
  }

  if (!isAuthenticated) {
    return navigateTo('/login')
  }
})
