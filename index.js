const express = require('express')
const app = express()

const models = require('./models/index')

const PORT = 3000

//Middleware
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor conectado, puerto ${PORT}`)
})