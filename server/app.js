const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routers/router')

const PORT = 9527

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

app.listen(PORT, () => {
  console.log(`Listen port at ${PORT}`)
})
