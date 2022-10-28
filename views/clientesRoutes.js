const express = require('express')
const router = express.Router()

const cliente = require('../models/cliente')

const db = require('../db/db')

router.get('/', (req, res), () => {

})

//middleware para las rutas de usuario
router.use('/user', UserRoutes)
router.use('/profile', ProfileRoutes)


module.exports = router