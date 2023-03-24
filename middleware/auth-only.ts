export default defineNuxtRouteMiddleware(async (to, from) => {
  const { value: token } = useCookie('auth')
  const store = userStore()
  const { fetchApi } = useApi()
  const { isAuthenticated } = useAuth()
  
  if (isAuthenticated) {
    const id = store.currentUser._id
    
    const { data: userData } = await fetchApi(`/users/${id}`, {
      method: 'GET',
      headers: {
        'x-access-token': token
      }
    })

    store.setUser(userData)
  }

  if (to.path === '/login') {
    return true
  }

  if (!isAuthenticated) {
    return navigateTo('/login')
  }
})
