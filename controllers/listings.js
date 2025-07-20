const Listing = require("../models/listing");
const { config, geocoding } = require("@maptiler/client");
config.apiKey=process.env.MAP_TOKEN;
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};
module.exports.renderNewForm = async (req, res) => {
    res.render("listings/new.ejs");
}
module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(req.params.id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};
module.exports.editListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250")
    res.render("listings/edit.ejs", { listing,originalImageUrl});
}
module.exports.createListing = async (req, res) => {
    try {
        const { location } = req.body.listing;

        // Use MapTiler Geocoding API
        const response = await geocoding.forward(location, {
            limit: 1,
        });

        const coordinates = response.features[0].geometry;
        console.log(coordinates);
        
        if (!coordinates) {
            req.flash("error", "Location not found.");
            return res.redirect("/listings/new");
        }

        // Get image info from Cloudinary upload
        const url = req.file.path;
        const filename = req.file.filename;

        // Create listing from form data
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        newListing.geometry = coordinates; // 👈 Add geometry from geocoding
        let savedListings=await newListing.save();
        console.log(savedListings);
        
        // Save listing
        await newListing.save();

        req.flash("success", "New Listing is Created");
        res.redirect(`/listings/${newListing._id}`);
    } catch (err) {
        console.error("Error creating listing:", err);
        req.flash("error", "Something went wrong while creating the listing.");
        res.redirect("/listings");
    }
};



module.exports.updateLsiting = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing is Updated");
    res.redirect(`/listings/${id}`);
}
module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing is Deleted");
    res.redirect("/listings");
}