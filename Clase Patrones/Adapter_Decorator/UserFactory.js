const Abogado = require('./models/abogado');
const Asistente = require('./models/asistente');
const EncryptPasswordDecorator = require('./Decorator/EncryptPasswordDecorator');

class UserFactory {
    createUser(type, userData) {
        let user;

        switch(type) {
            case 'Abogado':
                user = new Abogado(userData);
                break;
            case 'Asistente':
                user = new Asistente(userData);
                break;
            default:
                throw new Error('Tipo de usuario no válido');
        }

        return new EncryptPasswordDecorator(user);
    }
}

module.exports = new UserFactory();