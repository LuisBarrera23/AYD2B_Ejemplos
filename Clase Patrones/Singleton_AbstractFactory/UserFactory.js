const Abogado = require('./models/abogado');
const Asistente = require('./models/asistente');

class UserFactory {
    createUser(type, userData) {
        switch(type) {
            case 'Abogado':
                return new Abogado(userData);
            case 'Asistente':
                return new Asistente(userData);
            default:
                throw new Error('Tipo de usuario no valido');
        }
    }
}

module.exports = new UserFactory();