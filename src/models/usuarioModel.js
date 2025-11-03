const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de usuario
const userSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: false },
    perfil: { type: String, default: '' },  // Información adicional del perfil
    historialReservas: [{ type: Schema.Types.ObjectId, ref: 'Reserva' }]
}, { timestamps: true });

// Crear y exportar el modelo de Usuario
const User = mongoose.model('Usuario', userSchema);
module.exports = User;
