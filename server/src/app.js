const path = require('path')
const express = require('express')
const cors = require('cors')
const metaWeather = require('./utils/metaWeather')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())

app.get('/api/', async (req, res) => {
  const weather = await metaWeather(req.query.location)
  res.send(weather)
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})