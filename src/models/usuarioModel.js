// Importa mongoose para interactuar con la base de datos MongoDB
const mongoose = require('mongoose');

// Accede al constructor de esquema de mongoose
const Schema = mongoose.Schema;

// Definir el esquema de 'Usuario', que describe la estructura de los documentos en la colección 'Usuarios'
const userSchema = new Schema({
    
    // 'nombre': campo obligatorio de tipo String que almacena el nombre del usuario
    nombre: { type: String, required: true },

    // 'email': campo obligatorio de tipo String que almacena el correo electrónico del usuario.
    // Además, este campo debe ser único (unique: true), lo que significa que no puede haber dos usuarios con el mismo correo.
    email: { type: String, required: true, unique: true },

    // 'telefono': campo opcional de tipo String que almacena el número de teléfono del usuario
    telefono: { type: String, required: false },

    // 'perfil': campo de tipo String que almacena información adicional sobre el perfil del usuario.
    // Si no se especifica, su valor por defecto será una cadena vacía ('').
    perfil: { type: String, default: '' },

    // 'historialReservas': es un arreglo de referencias a la colección 'Reserva'.
    // Cada valor en el arreglo es un ObjectId que hace referencia a un documento 'Reserva'.
    historialReservas: [{ type: Schema.Types.ObjectId, ref: 'Reserva' }]
    
}, { 
    // La opción 'timestamps: true' agrega automáticamente los campos 'createdAt' (fecha de creación) y 'updatedAt' (fecha de última actualización)
    timestamps: true 
});

// Crear el modelo 'Usuario' a partir del esquema 'userSchema'.
// El modelo se utilizará para interactuar con la colección 'Usuarios' en la base de datos.
const User = mongoose.model('Usuario', userSchema);

// Exporta el modelo 'Usuario' para que pueda ser usado en otras partes de la aplicación
module.exports = User;
