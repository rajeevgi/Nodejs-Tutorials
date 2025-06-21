const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser')
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
const messageRoutes = require('./routes/messageRoutes');
app.use('/api/messages', messageRoutes);

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
});