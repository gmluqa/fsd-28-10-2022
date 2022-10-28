const express = require('express')
const router = express.Router()
const clientesController = require()

const cliente = require('../models/cliente')

const db = require('../db/db')
const clienteController = require('../controllers/clienteControllers')

router.get('/', clienteController)

//middleware para las rutas de usuario
router.use('/user', UserRoutes)
router.use('/profile', ProfileRoutes)


module.exports = router