const express = require("express");
const router = express.Router();
// Utils & Middleware
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner,validateListing}=require("../middleware.js")
// Models & Schemas
const Listing = require("../models/listing.js");
const listingController = require("../controllers/listings.js");
const multer=require("multer");
const {storage}=require("../cloudConfig.js")
const upload=multer({storage});
// Middleware: Validate Listing
//
// ROUTES
//
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post( isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.createListing));

// GET new listing form
router.get("/new", isLoggedIn,listingController.renderNewForm);
// GET show a single listing
router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
   .put(
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"), // ✅ Multer FIRST
  validateListing,
  wrapAsync(listingController.updateLsiting) // ✅ fixed typo here
)

    .delete( isLoggedIn ,isOwner,wrapAsync(listingController.deleteListing));
// GET edit listing form
router.get("/:id/edit", isLoggedIn , isOwner ,wrapAsync(listingController.editListing));
module.exports = router;

