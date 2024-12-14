const prisma = require('../database/prisma');

//menambahkan data review baru
const insertReview = async (reviewData) => {
    const review = await prisma.reviews.create({
        data: {
            book_id: parseInt(reviewData.book_id),
            review: reviewData.review,
            rating: parseInt(reviewData.rating),
        },
    });

    return review;
}