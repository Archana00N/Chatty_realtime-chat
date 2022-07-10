const express = require('express'); // importing from Node
const socketio = require('socket.io');
const http = require('http');

//socket.io setup
const PORT = process.env.PORT || 5000; // i.e. 5000 or process.env.port
const router = require('./router');

const app = express();
const server = http.createServer(app); // initialise server
const io = socketio(server); // socket io instance

io.on('connection', (socket) => { // register clients (client-side socket connection)
    console.log('Connection established');

    socket.on('disconnect',() => { // single specific socket disconnection (User left)
        console.log('User disconnected :(');
    })
});


app.use(router);

server.listen(PORT, console.log(`Server has started on ${PORT}`)); // to run server