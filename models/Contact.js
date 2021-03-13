const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  telefono: { type: String, required: true, trim: true },
  ciudad: { type: String, required: true, trim: true },
  comentario: { type: String, required: true, trim: true },
  creationDate: { type: Date, default: Date.now()},
});

module.exports = mongoose.model("Contact", ContactSchema);
