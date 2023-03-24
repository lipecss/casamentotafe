export default async function () {
  const { fetchApi } = useApi()

  const { data } = await fetchApi('/status')

  console.log('status', data)
}
