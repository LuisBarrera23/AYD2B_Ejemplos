const Abogado = require('./models/abogado');
const Asistente = require('./models/asistente');
const AbogadoValidation = require('./strategies/abogadoValidation');
const AsistenteValidation = require('./strategies/asistenteValidation');

class UserFactory {
    createUser(type, userData) {
        let validationStrategy;

        switch (type) {
            case 'Abogado':
                validationStrategy = new AbogadoValidation();
                break;
            case 'Asistente':
                validationStrategy = new AsistenteValidation();
                break;
            default:
                throw new Error('Tipo de usuario no válido');
        }

        validationStrategy.validate(userData);

        switch (type) {
            case 'Abogado':
                return new Abogado(userData);
            case 'Asistente':
                return new Asistente(userData);
        }
    }
}

module.exports = new UserFactory();
