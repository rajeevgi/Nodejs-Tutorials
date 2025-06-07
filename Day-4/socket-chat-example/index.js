const http = require('http');
const express = require('express');
const { join } = require('path');
// const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// app.use(express.static(path.resolve("./public")));

// Routes
// app.get('/', (req, res) => {    // first way
//     return res.sendFile("/public/index.html");
// });

// second way
app.get('/', (req, res) => {
    return res.sendFile(join(__dirname,'/public/index.html'));
});

// Socket.io
io.on('connection', (socket) => {
    socket.on("user-message", (message) => {
        io.emit('message', message);
    });
});

server.listen(8000, () => {
    console.log("Server is running at http://localhost:8000");
});