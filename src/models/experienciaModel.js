const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de experiencia
const experienciaSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true },
    disponibilidad: { type: Boolean, default: true },
    ubicacion: { type: String, required: true },
    aliado: { type: Schema.Types.ObjectId, ref: 'Aliado' }  // Relacionado con el modelo de Aliado
}, { timestamps: true });

// Crear y exportar el modelo de Experiencia
const Experiencia = mongoose.model('Experiencia', experienciaSchema);
module.exports = Experiencia;