const ValidationStrategy = require('./validationStrategy');

class AsistenteValidation extends ValidationStrategy {
    validate(userData) {
        if (!userData.nombre || !userData.correo) {
            throw new Error("Nombre y correo son requeridos para Asistente");
        }
        // Validaciones adicionales específicas para Asistente
    }
}

module.exports = AsistenteValidation;