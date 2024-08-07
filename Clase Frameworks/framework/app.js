// npm install express

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    try {
        console.log("Aca implementaremos lo que queramos para el endpoint...")
        res.status(200).json({"mensaje":"Funcionando"});
    } catch (error) {
        res.status(500).send({"mensaje":"Algo salio mal"});
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});