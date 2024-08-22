const EmailService = require('../EmailService');

class EmailAdapter {
    constructor() {
        this.emailService = new EmailService();
    }

    sendWelcomeEmail(user) {
        const subject = 'Bienvenido a nuestro servicio';
        const body = `Hola ${user.nombre}, gracias por registrarte.`;
        return this.emailService.sendEmail(user.correo, subject, body);
    }
}

module.exports = EmailAdapter;
