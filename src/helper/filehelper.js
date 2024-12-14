'use strict';
const multer = require('multer');
const path = require('path');
const crypto = require("crypto");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/books'); //lokasi penyimpanan file gambar book
    },
    filename: (req, file, cb) => {
        const hash = crypto.createHash('md5').update(Date.now().toString() + file.originalname).digest('hex');
        cb(null, hash + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['.png', '.jpg', '.jpeg'];
    if (allowedMimeTypes.includes(path.extname(file.originalname))) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only PNG, JPG, and JPEG are allowed.'), false);
    }
}

const limitsFile = {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5 MB
}

const upload = multer({
    storage: storage,
    limits: limitsFile,
    fileFilter: fileFilter,
});

module.exports = { upload };
