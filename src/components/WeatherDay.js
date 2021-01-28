import React from 'react'
import WeatherImage from '../components/WeatherImage'
import dateFormat from 'dateformat'

const WeatherDay = ({ results }) => (
  <div>
  {results && results.consolidated_weather.slice(0,5).map((item, index) => ( 
    <div key={index} className='DayBox'>
      <h3>{dateFormat(item.applicable_date, 'dddd d mmmm')}</h3>
      <p>{item.weather_state_name}</p>
      <p>{Math.round(item.min_temp)}°C min to {Math.round(item.max_temp)}°C max</p>
      <WeatherImage weatherState={item.weather_state_name} />
    </div> 
    )
  )}
</div>
)

export default WeatherDay