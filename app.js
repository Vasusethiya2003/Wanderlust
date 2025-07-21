if(process.env.NODE_ENV!="production"){
require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");
const session = require("express-session");
const MongoStore=require('connect-mongo')
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user.js");

// Routes
const homeRouter = require("./routes/home");
const listingsRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const dbUrl=process.env.ATLAS_DB;
// Database connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected");
}

// App setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
})
store.on("error",()=>{
    console.log("Error in MONGO SESSION STORE",err);
})
// Session setup
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));
app.use(flash());

// Passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user;
    res.locals.currentUser = req.user; // optional for auth-based UI
    next();
});

// Routes
app.use("/", homeRouter);    
app.use("/listings", listingsRouter);
app.use("/listings", reviewRouter);
app.use("/", userRouter); // ✅ Corrected line

// Dummy user creation route (only for testing)
app.get("/demouser", async (req, res) => {
    let fakeuser = new User({
        email: "user@gmail.com",
        username: "Fakeuser"
    });
    let registeredUser = await User.register(fakeuser, "helloworld");
    res.send(registeredUser);
});
// Error handler
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong!" } = err;
    res.status(status).render("error.ejs", { err });
});
const port=process.env.PORT || 8080;
// Start server
app.listen(port, () => {
    console.log(" Server is listening on port 8080");
});
