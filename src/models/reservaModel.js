const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de reserva
const reservaSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    experiencia: { type: Schema.Types.ObjectId, ref: 'Experiencia' },
    fechaReserva: { type: Date, required: true },
    estado: { type: String, enum: ['reservado', 'cancelado'], default: 'reservado' }
}, { timestamps: true });

// Crear y exportar el modelo de Reserva
const Reserva = mongoose.model('Reserva', reservaSchema);
module.exports = Reserva;
