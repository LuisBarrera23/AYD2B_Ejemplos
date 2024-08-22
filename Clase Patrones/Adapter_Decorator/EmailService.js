class EmailService {
    sendEmail(to, subject, body) {
        // Lógica para enviar un email usando una API de terceros, e.g., SendGrid, Mailgun, etc.
        console.log(`Enviando correo a ${to} con el asunto "${subject}" y el cuerpo "${body}"`);
        // Aquí iría la implementación específica de la API
        return Promise.resolve('Email enviado');
    }
}

module.exports = EmailService;
