import React from 'react'
import WeatherDay from '../components/WeatherDay'
import Title from '../components/Title'
import useApiResults from '../Hooks/useApiResults'

const Weather = () => {
  const [results, errorMessage] = useApiResults()

  return (
    <div>
      <Title locationName={results.title} />
      <WeatherDay results={results}/>
      {errorMessage && <h1>{errorMessage}</h1>}
    </div>
  )
}

export default Weather
