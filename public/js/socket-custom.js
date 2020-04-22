var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar mensajes
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el server');
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Perra',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

// Escuchar información.

socket.on('enviarMensaje', function(mensaje) {
    console.log("Servidor", mensaje);
})