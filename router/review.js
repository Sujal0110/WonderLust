const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const reviewController = require("../controllers/review");
const {
    validateReviews,
    isLoggedIn,
    isReviewAuthor,
} = require("../middleware");

// POST Review Route
router.post(
    "/",
    isLoggedIn,
    validateReviews,
    wrapAsync(reviewController.createReview),
);

// Delete Review Route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview),
);

module.exports = router;
