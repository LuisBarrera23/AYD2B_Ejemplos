const express = require('express');
const bodyParser = require('body-parser');
const UserFactory = require('./UserFactory');
const Database = require('./dbSingleton'); // Para asegurarnos de que la conexión se establece al iniciar el servidor

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/users', (req, res) => {
    const { type, userData } = req.body;
    
    try {
        const user = UserFactory.createUser(type, userData);
        user.save((err, savedUser) => {
            if (err) return res.status(500).send(err);
            res.status(200).send(savedUser);
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});