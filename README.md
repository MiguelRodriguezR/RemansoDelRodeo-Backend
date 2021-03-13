# Proyecto creado para prueba tecnica de vecindario.com

El api tiene un solo endpoind que sirve para crear un contacto en una base de datos mongodb previamente configurada

```endpoint
POST /api/contacts
```

Property | Description
---|---
`ciudad` | (required) ciudad del contacto
`comentario` | (required)  comentario del contacto
`email` | (required, valid email)  email del contacto 
`nombre` | (required)  nombre del contacto
`telefono` | (required, valid Colombian phone)  telefono del contacto

#### Example request

```javascript
client.createContact({
  ciudad: "Pasto",
  comentario: "Muy Lindo me gusta :)",
  email: "teasc@yopmail.com",
  nombre: "Miguel",
  telefono: "3173221234"
}, function(err, contact) {
  console.log(contact);
});
```
