export const useAuth = () => {
  let token = useCookie('auth')
  const { clearUserStore } = userStore()
  const { fetchApi } = useApi()
  const router = useRouter()

  const isAuthenticated = !!token.value
  
  const logout = async () => {
    try {

      const { data, error } = await fetchApi('/users/logout', {
        method: 'POST',
        headers: {
          'x-access-token': token.value
        }
      }) as { data: any, error: any }

      if (!error.value) {    
        token.value = null
        clearUserStore()
    
        router.push({ path: '/login'})
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return { isAuthenticated, logout }
}
