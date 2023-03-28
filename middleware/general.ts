export default async function () {
  const store = statusStore()
  const { fetchApi } = useApi()

  const isEmptyObject = Object.entries(store.status).length === 0

  if (isEmptyObject) {
    const { data, error } = await fetchApi('/status')

    if (!error) store.setStatus(data)
  }
}
