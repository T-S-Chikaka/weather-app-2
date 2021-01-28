const axios = require('axios')

const metaWeather =  axios.create({
  baseURL: 'https://www.metaweather.com/api',
});

const searchApi = async (location) => {
  try {
    const response = await metaWeather.get(`/location/${location}`)
    return response.data
  } catch (e) {
    return {error: 'Something Went Wrong'}
  }
}

module.exports =  searchApi