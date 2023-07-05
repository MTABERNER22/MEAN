var express = require('express');
var router = express.Router();
const contacto = require("../controllers/contactoController")

router.post('/', contacto.create);

module.exports = router;
