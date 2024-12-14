const prisma = require('../database/prisma');

const findBooksReviewData = async () => {
    const reviewsData = await prisma.reviewBook.findMany({
        include: {
            books: true,
        },
    });

    return reviewsData;
}

const findBookReviewDataById = async () => {
    const reviewDataById = await prisma.reviewBook.findUnique({
        where: {
            id,
        },
        include: {
            books: true,
        },
    });

    return reviewDataById;
}

//menambahkan data review baru
const insertReview = async (reviewData) => {
    const review = await prisma.reviewBook.create({
        data: {
            reviewerName: reviewData.reviewerName,
            reviewText: reviewData.reviewText,
            starRating: parseFloat(reviewData.starRating),
            bookId: parseInt(reviewData.bookId),
            date: new Date(reviewData.date),
        },
    });

    return review;
};

const updateReview = async (id, reviewData) => {
    const review = await prisma.reviewBook.update({
        where: {
            id: parseInt(id),
        },
        data: {
            ...(reviewData.reviewerName && { reviewerName: reviewData.reviewerName }),
            ...(reviewData.reviewText && { reviewText: reviewData.reviewText }),
            ...(reviewData.starRating && { starRating: parseInt(reviewData.starRating) }),
            ...(reviewData.bookId && { bookId: parseInt(reviewData.bookId) }),
            //etiap kali review di-update, date selalu diperbarui ke waktu saat ini tanpa harus diinput oleh client,
            date: new Date(),
        },
    });

    return review;
};

const removeReview = async (id) => {
    const review = await prisma.reviewBook.delete({
        where: {
            id,
        },
    });

    return review;
}

module.exports = {
    findBooksReviewData,
    findBookReviewDataById,
    insertReview,
    updateReview,
    removeReview,
}