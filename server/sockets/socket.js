const { io } = require('../server');

// Para saver cuando un usuario se conecta al servidor.
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Para saver uando perdemos conexion con el usuario.
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente.
    // Recibimos el objeto como 'mensaje', este es el que se envie dese el index.html.
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // El evento 'enviarMensaje' lo escucha todos los lientes o usuarios.
        // client.broadcast para que lo escuchen todos los usuarios.
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!'
        //     });
        // }

        // Cuando todo sale bien.
        //callback();
    });
});