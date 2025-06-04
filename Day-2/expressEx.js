const http = require('http');
const express = require('express');

const app = express();

// Http Methods
app.get('/', (req, res) => {
    res.send('Hello from homepage...');
});

app.get('/about', (req, res) => {
    res.send(`Hello from about page...\n Hey  ${req.query.name}`);
});

const myServer = http.createServer(app);

const port = 5000;
myServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});