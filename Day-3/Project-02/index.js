const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const mongoose = require('./config/connection');

// Middleware
app.use(express.json());

// Routes 
const urlRoutes = require('./routes/urlRoutes');
app.use('/api/urls', urlRoutes);

const Port = process.env.PORT | 5000;
app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
});