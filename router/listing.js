const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateListings } = require("../middleware");

// index route
router.get(
    "/",
    wrapAsync(async (req, res) => {
        let allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    }),
);

// new route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

// create route
router.post(
    "/",
    isLoggedIn,
    validateListings,
    wrapAsync(async (req, res, next) => {
        let newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    }),
);

// show route
router.get(
    "/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id)
            .populate({ path: "reviews", populate: { path: "author" } })
            .populate("owner");
        if (!listing) {
            req.flash("error", "Listing you requested does not existed!");
            res.redirect("/listings");
        } else {
            res.render("listings/show.ejs", { listing });
        }
    }),
);

// edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "Listing you requested does not existed!");
            res.redirect("/listings");
        } else {
            res.render("listings/edit.ejs", { listing });
        }
    }),
);

// update route
router.put(
    "/:id",
    isLoggedIn,
    isOwner,
    validateListings,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        req.flash("success", "Listing Updated!");
        res.redirect(`/listings/${id}`);
    }),
);

// delete route
router.delete(
    "/:id",
    isLoggedIn,
    isOwner,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing Deleted!");
        res.redirect("/listings");
    }),
);

module.exports = router;
