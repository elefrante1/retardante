const express = require('express');
const app = express();

app.get('/delay', (req, res) => {
    const delay = 15000; // 15 segundos
    console.log(`Inicio del retardo: ${new Date().toISOString()}`);
    setTimeout(() => {
        console.log(`Fin del retardo: ${new Date().toISOString()}`);
        res.json({ response: "¡Hola! Esta respuesta se envió con un retardo de 15 segundos." });
    }, delay);
});

// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
