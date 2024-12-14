//disini untuk handle bisnis logic
//reusable

const { 
    findBooks, 
    findBooksById, 
    insertBook, 
    updateBook, 
    deleteBook 
} = require("../repository/BookRepository");


const getAllBooksData = async (req, res) => {
    const books = await findBooks();

    return books;
};

const getBookDataById = async (id) => {
    const book = await findBooksById(id);

    if (!book) {
        throw new Error('Book not found');
    }

    return book;
};

const addNewBookData = async (newBookData) => {
    const book = await insertBook(newBookData)

    return book;
}

const updateBookDataById = async (id, bookData) => {
    await getBookDataById(id);

    const book = await updateBook(id, bookData);

    return book;
};

const deletedBookDataById = async (id) => {
    await getBookDataById(id);

    await deleteBook(id);
};  

module.exports = { 
    getAllBooksData, 
    getBookDataById, 
    addNewBookData, 
    updateBookDataById, 
    deletedBookDataById,
};