const express = require('express');
const router = express.Router();
const upload = require('../multerConfig');
const uploadController = require('../controllers/uploadController');

router.post('/upload', upload.single('myfile'), uploadController.uploadFile);

module.exports = router;
