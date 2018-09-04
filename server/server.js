const express = require('express');
const socketIO = require('socket.io');
// Necesafrio para trabar con socket.io.
const http = require('http');

const path = require('path');

const app = express();

// Definir el servidor para correr la aplicacion.
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializar el socket.io
// IO = Esta es la comunicacion del backend
// module.exports para poder utilizar la varibale io en el archivo socket.js
module.exports.io = socketIO(server);
require('./sockets/socket');
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});