export const useStatus = () => {
  // Define o estado "isBeforeWedding" como "null"
  let counter = useState('isBeforeWedding', () => true)

  // Define a função "getStatus" para obter o status da API
  const getStatus = async () => {
    try {
      const { data } = await useFetch('http://localhost:5000/status')
      
      counter = data.value.isBeforeWedding
      //isBeforeWedding(data.isBeforeWedding)
    } catch (error) {
      console.log('error', error)
    }
  }

  // Retorna o estado "isBeforeWedding" e a função para obter o status
  return { counter, getStatus }
}
