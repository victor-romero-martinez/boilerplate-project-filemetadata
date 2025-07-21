// @ts-check

const multer = require('multer');
require('dotenv').config();

const UPLOADS_DIR = process.env.UPLOAD_DIR ??'./uploads';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware.single('upfile');