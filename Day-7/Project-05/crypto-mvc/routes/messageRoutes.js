const express = require('express');
const messageController = require('../controllers/messageController');
const router = express.Router();

// Save Messages
router.post('/save', messageController.saveMessages);

// Get Messages By Id
router.get('/getMessages/:id', messageController.getMessageById);

module.exports = router;