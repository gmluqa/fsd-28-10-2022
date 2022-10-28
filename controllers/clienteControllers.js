const models = require('../models/index')

const clienteController = {}

clienteController.getClientes = async (req, res) => {
    let resp = await models.cliente.findAll()

    // try {
    //     let usuario = req.params.usuario
    //     let resp = await Perfil.findAll({
    //         where: { nomUsuario: usuario },
    //         include: {
    //             model: Publicacion,
    //             attributes: ['texto', 'likes']
    //         },
    //         attributes: ['nomUsuario', 'usuarioMail']
    //     })
    //     res.send(resp)
    // } catch (err) {
    //     res.send(err)
    // }
}


module.exports = clienteController
