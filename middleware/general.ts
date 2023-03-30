export default async function () {
  const store = statusStore()
  const { fetchApi } = useApi()

  const isEmptyObject = await Object.entries(store.status).length === 0

  const { data, error } = await fetchApi('/status')

  if (!error && isEmptyObject) store.setStatus(data)
}
