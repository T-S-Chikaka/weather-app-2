import React, { useEffect, useState }  from 'react'

const WeatherImage = ({ weatherState }) => {
  const [url, setUrl] = useState('')

  const getUrl = (weatherState) => {
     const abv = weatherState.toLowerCase().split(' ').map(word => word[0]).join('')
     setUrl(`https://www.metaweather.com/static/img/weather/png/${abv}.png`)
  }
  
  useEffect(() => {
    getUrl(weatherState)
  }, [])

  return  <img src={url} className='WeatherImage'/>
}

export default WeatherImage