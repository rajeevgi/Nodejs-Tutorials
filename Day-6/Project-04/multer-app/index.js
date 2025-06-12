const express = require('express');
const path = require('path');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

// Middlewares
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended : true }));

// Routes
app.use('/', uploadRoutes);

// Serve upload form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/', (req, res) => {
    res.send('Hello, rajeev!');
})

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});