const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server); 

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io connections
io.on('connection', (socket) => {
    console.log('User Connected:', socket.id);

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected...', socket.id);
    });
});

// Server
const port = 5000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
