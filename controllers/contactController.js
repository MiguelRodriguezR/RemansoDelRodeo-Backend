const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');

exports.createContact = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    try{
        contact = new Contact(req.body);
        await contact.save();
        res.json({ contact });
    }catch(error){
        console.log(error);
        res.status(400).send("Hay un error");
    }
}