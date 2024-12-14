//tempat utk berkomunikasi dengan database
//menggunakan ORM (Object Relational Mapping) atau boleh juga menggunakan Raw Query
//klau mau ganti jenis ORM atau database, cukup ganti disini

const prisma = require("../database/prisma");

const findBooks = async () => {
    const showBooks = await prisma.books.findMany();
    return showBooks;
}

const findBooksById = async (id) => {
    const book = await prisma.books.findUnique({
        where: {
            id,
        }
    });
    return book;
}

const insertBook = async (bookData) => {
    const book = await prisma.books.create({
        data: {
            isbn: bookData.isbn,
            title: bookData.title,
            author: bookData.author,
            publish_year: parseInt(bookData.publish_year),
            publisher: bookData.publisher,
            book_pages: parseInt(bookData.book_pages),
            genre: bookData.genre,
            cover_book_photo: bookData.cover_book_photo,
            description: bookData.description,
        },
    });

    return book;
}

const updateBook = async (id, bookData) => {
    const book = await prisma.books.update({
        where: {
            id: parseInt(id),
        },
        data: {
            ...(bookData.isbn && { isbn: bookData.isbn }),
            ...(bookData.title && { title: bookData.title }),
            ...(bookData.author && { author: bookData.author }),
            ...(bookData.publish_year && { publish_year: parseInt(bookData.publish_year) }),
            ...(bookData.publisher && { publisher: bookData.publisher }),
            ...(bookData.book_pages && { book_pages: parseInt(bookData.book_pages) }),
            ...(bookData.genre && { genre: bookData.genre }),
            ...(bookData.cover_book_photo && { cover_book_photo: bookData.cover_book_photo }),
            ...(bookData.description && { description: bookData.description }),
        },
    });

    return book;
};

const deleteBook = async (id) => {
    const book = await prisma.books.delete({
        where: {
            id,
        },
    });
    return book;
}

module.exports = { 
    findBooks, 
    findBooksById, 
    insertBook, 
    updateBook, 
    deleteBook 
};