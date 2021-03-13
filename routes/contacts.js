const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { check } = require('express-validator');

router.post('/', [
    check('nombre', 'Nombre es requerido').not().isEmpty(),
    check('email', 'Email es requerido').not().isEmpty(),
    check('email', 'Añade un email valido').isEmail(),
    check('telefono', 'Telefono es requerido').not().isEmpty(),
    check('telefono', 'Añade un telefono valido en Colombia').matches(/^[3][1-9]\d{8}$/g),
    check('ciudad', 'Ciudad es requerido').not().isEmpty(),
    check('comentario', 'Comentario es requerido').not().isEmpty(),
], contactController.createContact);

module.exports = router;