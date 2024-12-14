const express = require("express");
const {
    getAllReviewsData,
    getReviewDataById,
    addNewReviewData,
    updateReviewDataById,
    deleteReviewDataById,
} = require("../service/ReviewService");

const router = express.Router();

// GET: Semua review
router.get("/", async (req, res) => {
    try {
        const reviews = await getAllReviewsData();
        res.status(200).send(reviews);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// GET: Review berdasarkan ID
router.get("/:id", async (req, res) => {
    try {
        const reviewId = parseInt(req.params.id);
        const review = await getReviewDataById(reviewId);
        res.status(200).send(review);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// POST: Tambah review baru
router.post("/", async (req, res) => {
    try {
        const newReviewData = req.body;
        const review = await addNewReviewData(newReviewData);
        res.status(201).send({
            data: review,
            message: "New review has been created",
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// PUT: Perbarui semua data review
router.put("/:id", async (req, res) => {
    try {
        const reviewId = parseInt(req.params.id);
        const reviewData = req.body;
        const review = await updateReviewDataById(reviewId, reviewData);
        res.status(200).send({
            data: review,
            message: "Review has been updated",
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// DELETE: Hapus review
router.delete("/:id", async (req, res) => {
    try {
        const reviewId = parseInt(req.params.id);
        await deleteReviewDataById(reviewId);
        res.status(200).send({
            message: "Review has been deleted",
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
