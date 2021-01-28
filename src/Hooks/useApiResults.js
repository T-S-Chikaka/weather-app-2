import { useEffect, useState }  from 'react'
import metaWeather from '../utils/serverClient'

const useApiResults = () => {
  const [results, setResults ] = useState({ consolidated_weather: []})
  const [errorMessage, setErrorMessage] = useState([])

  const searchApi = async (location) => {
      const response = await metaWeather.get(`/api`, { params: { location } })
      !response.data.error ?  setResults(response.data) : setErrorMessage(response.data.error)
  }

  useEffect(() => {
    searchApi(44544)
  }, [])

  return [results, errorMessage]
}

export default useApiResults