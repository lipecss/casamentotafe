export const useApi = () => {
  const fetchApi = async (url: string, options: Object) => {
    const baseApiUrl = 'http://localhost:5000'
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
