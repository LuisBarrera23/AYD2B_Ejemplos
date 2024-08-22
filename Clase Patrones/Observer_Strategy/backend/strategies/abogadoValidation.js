// strategies/abogadoValidation.js
const ValidationStrategy = require('./validationStrategy');

class AbogadoValidation extends ValidationStrategy {
    validate(userData) {
        if (!userData.nombre || !userData.correo) {
            throw new Error("Nombre y correo son requeridos para Abogado");
        }
        // Validaciones adicionales específicas para Abogado
    }
}

module.exports = AbogadoValidation;
