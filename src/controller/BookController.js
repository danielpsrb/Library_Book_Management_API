//disini tempat untuk handle request dan response
//dan juga untuk validasi body

const express = require("express");

const { getAllBooksData, getBookDataById, addNewBookData, updateBookDataById, deletedBookDataById } = require("../service/BookService");
const { upload, generateImageUrl } = require("../helper/filehelper");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await getAllBooksData();

        res.send(books);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const bookId = parseInt(req.params.id);
        const book = await getBookDataById(parseInt(bookId));

        res.send(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/', upload.single('cover_book_photo'), async (req, res) => {
    try {
        const newBookData = req.body;

        if (req.file) {
            newBookData.cover_book_photo = generateImageUrl(req, req.file.filename);
        }

        const book = await addNewBookData(newBookData);

        res.status(201).json({
            status: "success",
            code: 201,
            data: book,
            message: "New book has been successfully created.",
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put('/:id', upload.single('cover_book_photo'), async (req, res) => {

    const bookId = req.params.id;
    const bookData = req.body;

    if (req.file) {
        bookData.cover_book_photo = req.file.filename;
    }

    if (
        !(
            bookData.isbn &&
            bookData.title &&
            bookData.author &&
            bookData.publish_year &&
            bookData.publisher &&
            bookData.book_pages &&
            bookData.genre &&
            bookData.cover_book_photo &&
            bookData.description
        )
    ) {
        return res.status(400).send({
            message: 'Some fields are missing, and all fields are required',
        });
    }

    const book = await updateBookDataById(parseInt(bookId), bookData);
    
    res.status(200);

    res.send({
        status: 'success',
        data: book,
        message: 'Book Data has been updated',
    });
});

router.patch('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const bookData = req.body;

        const book = await updateBookDataById(parseInt(bookId), bookData);

        res.status(200);

        res.send({
            status: 'success',
            data: book,
            message: 'Book Data has been updated',
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const bookId = req.params.id;

        await deletedBookDataById(parseInt(bookId));

        res.status(200);

        res.send({
            status: 'success',
            message: 'Book Data has been deleted',
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;