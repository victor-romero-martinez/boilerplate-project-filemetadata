// @ts-check

const express = require('express');
const uploadMiddleware = require('../middlewares/upload.middleware');
const uploadController = require('../controllers/file.controller');
const router = express.Router();


router.post('/api/fileanalyse', uploadMiddleware, uploadController);

module.exports = router;