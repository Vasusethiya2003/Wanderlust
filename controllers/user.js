const { model } = require("mongoose");
const User = require("../models/user.js");
const passport = require("passport");
module.exports.showSignupForm= (req, res) => {
    res.render("users/signup");
}
module.exports.handleSignupForm=async (req, res,next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        // Automatically login the user after registration
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to WanderLust!");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}
module.exports.showLoginForm=(req, res) => {
    res.render("users/login.ejs");
}
module.exports.handleLoginForm=  [passport.authenticate("local", {
        failureRedirect: "/users/login",
        failureFlash: true,
    }),
    (req, res) => {
        req.flash("success", "Welcome back to WanderLust! You are logged in!");
        const redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    }];
module.exports.logout= (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You have successfully logged out!");
        res.redirect("/listings");
    });
}