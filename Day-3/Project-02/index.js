const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const path = require('path');
const mongoose = require('./config/connection');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set View Engine and its path
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Routes 
const urlRoutes = require('./routes/urlRoutes');
app.use('/api/urls', urlRoutes);

const Port = process.env.PORT | 5000;
app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
});