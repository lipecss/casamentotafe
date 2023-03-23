export default async function () {
  const { isAuthenticated, logout } = useAuth()
  const { fetchApi } = useApi()
  let auth = useCookie('auth')

  if (isAuthenticated) {
    try {
      const { data, error } = await fetchApi('/verify', {
        headers: {
          'x-access-token': auth.value
        }
      }) as { data: any, error: any }
      
      if (!error.value) {    
        if (!data.value.validToken) logout()
      }
    } catch (error) {
      return
    }
    // if (auth.value && !isAuthenticated) logout()
  }
}
