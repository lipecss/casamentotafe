export const useApi = () => {
  const config = useRuntimeConfig()

  const fetchApi = async (url: string, options: Object) => {
    const baseApiUrl = config.public.apiBaseUrl
    const completeUrl = `${baseApiUrl}${url}`

    try {
      const { data, error, pending } = await useFetch(completeUrl, options)
      return {
        data, 
        error,
        pending
      }
    } catch (error) {
      return error
    }
  }

  return { fetchApi }
}
