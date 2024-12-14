const { 
    findBooksReviewData, 
    findBookReviewDataById, 
    insertReview, 
    updateReview, 
    removeReview,
} =  require('../repository/ReviewRepository');

const getAllReviewsData = async () => {
    const reviews = await findBooksReviewData();

    return reviews;
}

const getReviewDataById = async (id) => {
    const review = await findBookReviewDataById(id);

    if (!review) {
        throw new Error('Review not found');
    }

    return review;
};

const addNewReviewData = async (newReviewData) => {
    const review = await insertReview(newReviewData);

    return review;
};

const updateReviewDataById = async (id, reviewData) => {
    await getReviewDataById(id);

    const review = await updateReview(id, reviewData);

    return review;
};

const deleteReviewDataById = async (id) => {
    await getReviewDataById(id);

    await removeReview(id);
};

module.exports = { 
    getAllReviewsData, 
    getReviewDataById, 
    addNewReviewData, 
    updateReviewDataById, 
    deleteReviewDataById,
};