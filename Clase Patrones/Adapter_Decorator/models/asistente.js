const db = require('../dbSingleton');
const EmailAdapter = require('../Adapters/EmailAdapter');

class Asistente {
    constructor(data) {
        this.nombre = data.nombre;
        this.correo = data.correo;
        this.contrasenia = data.contrasenia;
        this.emailAdapter = new EmailAdapter();
    }

    async save() {
        try {
            // Guardar en la base de datos
            await db.query('INSERT INTO asistente (nombre, correo, contrasenia) VALUES (?, ?, ?)', 
                           [this.nombre, this.correo, this.contrasenia]);

            await this.emailAdapter.sendWelcomeEmail(this);

            return { success: true, message: 'Asistente registrado y correo enviado exitosamente.' };
        } catch (error) {
            throw new Error(`Error al guardar asistente: ${error.message}`);
        }
    }
}

module.exports = Asistente;