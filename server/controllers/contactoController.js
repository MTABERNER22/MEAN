const usuariosModel = require("../models/contactoModel");

module.exports = {
    create: async function (req, res, next) {
        try {
            console.log(req.body);
            console.log(req.body.name);
            const document = new usuariosModel({
                empresa:req.body.empresa,
                nombres: req.body.nombres,
                apellidos:req.body.apellidos,
                email: req.body.email,
                telefono: req.body.telefono,
                mensaje: req.body.mensaje
            })
            const response = await document.save()
            res.json(response)
        } catch (e) {
            next(e)
        }

    }

}