const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const path = require('path');
const mongoose = require('./config/connection');
const session = require('express-session');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge : 60 * 60 * 1000 }   // 1-hour
}));

// Set View Engine and its path
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Routes 
const urlRoutes = require('./routes/urlRoutes');
app.use('/api/urls', urlRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/auth', userRoutes);

const Port = process.env.PORT | 5000;
app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
});