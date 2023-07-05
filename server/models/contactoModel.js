const mongoose = require("../config/mongodb");

const usuariosSchema = new mongoose.Schema({
    empresa:String,
    nombres: String,
    apellidos:String,
    email: String,
    telefono: Number,
    mensaje: String
});


module.exports = mongoose.model("contacto", usuariosSchema)