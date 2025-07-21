// routes/home.js
const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listings");
const wrapAsync = require("../utils/wrapAsync");

// Home page route → render listings/index.ejs
router.get("/", wrapAsync(listingController.index));

module.exports = router;
