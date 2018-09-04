 // Para saver cuando nos conectamos al servidor.
 var socket = io();

 socket.on('connect', function() {
     console.log('Conectado al servidor');
 });

 // Evento "disconnect"
 // los 'on' son para escuchar informacion o escuchar sucesos.
 socket.on('disconnect', function() {
     console.log('Perdimos conexión con el servidor');
 });

 // Emitir un mensaje desde el cliente y que lo escuche el servidor.
 // Los 'emit' son para enviar informacion 
 // Enviar información
 socket.emit('enviarMensaje', {
     usuario: 'Carlos',
     mensaje: 'Hola Servidor'
         // Esta funcion se ejecutara si todo salio bien.
 }, function(resp) {

     // Ponemos la respuesta que biene del servidor.
     console.log('Respuesta server: ', resp);
 });

 // Escuchar información.
 socket.on('enviarMensaje', function(mensaje) {
     console.log('Servidor:', mensaje);
 });