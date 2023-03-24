export const useAuth = () => {
  let token = useCookie('auth')
  const { clearUserStore } = userStore()
  const { fetchApi } = useApi()
  const router = useRouter()
  const { clearCart } = cartStore()

  const isAuthenticated = !!token.value
  
  const logout = async () => {
    try {

      const { error } = await fetchApi('/users/logout', {
        method: 'POST',
        headers: {
          'x-access-token': token.value
        }
      }) as { data: any, error: any }

      if (!error) {    
        token.value = null
        clearUserStore()
        clearCart()
    
        router.push({ path: '/login'})
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return { isAuthenticated, logout }
}
