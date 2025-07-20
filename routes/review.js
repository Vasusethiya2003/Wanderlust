const express = require("express");
const router = express.Router({ mergeParams: true }); // ✅ important!
const wrapAsync = require("../utils/wrapAsync.js");
const reviewController=require("../controllers/review.js");
const { validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js")
// ✅ Create a review
router.post("/:id/reviews",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));
// ✅ Delete a review
router.delete("/:id/reviews/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.deleteReview));
module.exports = router;
