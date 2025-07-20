const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");
const userController=require("../controllers/user.js");
// ===================================
// SIGNUP ROUTES
// ===================================

// Show signup form
router.route("/signup")
    .get(userController.showSignupForm)
    .post(wrapAsync(userController.handleSignupForm));

// ===================================
// LOGIN ROUTES
// ===================================

// Show login form
router.route("/login")
    .get(userController.showLoginForm)
    .post(
        saveRedirectUrl,
    userController.handleLoginForm
    );
// ===================================
// LOGOUT ROUTE
// ===================================

router.get("/logout",userController.logout);

module.exports = router;
