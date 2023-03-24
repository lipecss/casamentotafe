export const useApi = () => {
  const config = useRuntimeConfig()

  const fetchApi = async (url: string, options: Object) => {
    const baseApiUrl = config.public.apiBaseUrl
    const completeUrl = `${baseApiUrl}${url}`

    try {
      const { data, error, pending } = await useFetch(completeUrl, options)
    
      if (error.value) {
        const { response } = error.value
    
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
