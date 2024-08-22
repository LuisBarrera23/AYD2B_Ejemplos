const express = require('express');
const bodyParser = require('body-parser');
const UserFactory = require('./UserFactory');
const Database = require('./dbSingleton'); // Para asegurarnos de que la conexión se establece al iniciar el servidor

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/users', async (req, res) => {
    const { type, userData } = req.body;

    try {
        const user = UserFactory.createUser(type, userData);
        const result = await user.save();
        res.status(200).send(result); // Enviar la respuesta de éxito al cliente
    } catch (error) {
        res.status(500).send({ success: false, message: error.message }); // Enviar el error al cliente
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});