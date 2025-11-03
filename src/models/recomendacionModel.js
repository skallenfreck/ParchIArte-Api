const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de recomendación
const recomendacionSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    actividadRecomendada: { type: Schema.Types.ObjectId, ref: 'Experiencia' },
    presupuesto: { type: Number, required: true },
    fechaCreacion: { type: Date, default: Date.now }
}, { timestamps: true });

// Crear y exportar el modelo de Recomendación
const Recomendacion = mongoose.model('Recomendacion', recomendacionSchema);
module.exports = Recomendacion;