// aca se trabajara la base de datos con patron singleton
const mysql = require('mysql2');

class Database {
    constructor() {
        if (!Database.instance) {
            this.connection = mysql.createConnection({
                host: '34.72.24.22',
                user: 'root',
                password: 'ayd2b1234',
                database: 'ejemplo'
            });

            this.connection.connect(err => {
                if (err) {
                    console.error('Error al conectarse a la base de datos:', err);
                } else {
                    console.log('base de datos conectada correctamente');
                }
            });

            Database.instance = this;
        }

        return Database.instance;
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance;
