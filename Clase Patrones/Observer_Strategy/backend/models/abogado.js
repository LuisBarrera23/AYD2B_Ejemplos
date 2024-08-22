class Abogado {
    constructor(data) {
        this.nombre = data.nombre;
        this.correo = data.correo;
        this.contrasenia = data.contrasenia;
    }

    save() {
        const db = require('../dbSingleton');
        return db.query('INSERT INTO abogado (nombre, correo, contrasenia) VALUES (?, ?, ?)', 
                        [this.nombre, this.correo, this.contrasenia]);
    }
}

module.exports = Abogado;