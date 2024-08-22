const bcrypt = require('bcrypt');

class EncryptPasswordDecorator {
    constructor(user) {
        this.user = user;
    }

    async save() {
        this.user.contrasenia = await bcrypt.hash(this.user.contrasenia, 10);
        return this.user.save();
    }
}

module.exports = EncryptPasswordDecorator;
