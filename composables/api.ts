export const useApi = () => {
  const config = useRuntimeConfig()

  let token = useCookie('auth')
  let user = useCookie('user-store')
  let cart = useCookie('cart-store')
  const { clearUserStore } = userStore()
  const router = useRouter()
  const { clearCart } = cartStore()

  const fetchApi = async (url: string, options: Object) => {
    const baseApiUrl = config.public.apiBaseUrl
    const completeUrl = `${baseApiUrl}${url}`

    try {
      const { data, error, pending } = await useFetch(completeUrl, options)
   
      if (error.value) {
        const { response, status } = error.value

        if (status === 401) {
          token.value = null
          user.value = null
          cart.value = null
          clearUserStore()
          clearCart()
      
          return router.push({ path: '/login'})
        }

        return {
          data: null, 
          error: true,
          message: response?._data?.message,
          pending: pending.value
        }
      } else {
        return {
          data: data.value, 
          error: false,
          pending: pending.value
        }
      }
    } catch (error) {
      return {
        data: null,
        error: 'Falha ao realizar operação',
        pending: false
      }
    }
    
  }

  return { fetchApi }
}
