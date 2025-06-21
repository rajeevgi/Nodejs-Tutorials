const express = require('express');
const app = express();
const db = require('./config/database');
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


const Port = process.env.PORT || 3000;
app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
});