const db = require('../dbSingleton');
const EmailAdapter = require('../Adapters/EmailAdapter');

class Abogado {
    constructor(data) {
        this.nombre = data.nombre;
        this.correo = data.correo;
        this.contrasenia = data.contrasenia;
        this.emailAdapter = new EmailAdapter();
    }

    async save() {
        try {
            // Guardar en la base de datos
            await db.query('INSERT INTO abogado (nombre, correo, contrasenia) VALUES (?, ?, ?)', 
                           [this.nombre, this.correo, this.contrasenia]);

            await this.emailAdapter.sendWelcomeEmail(this);

            return { success: true, message: 'Abogado registrado y correo enviado exitosamente.' };
        } catch (error) {
            throw new Error(`Error al guardar abogado: ${error.message}`);
        }
    }
}

module.exports = Abogado;