const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateListings } = require("../middleware");
const listingController = require("../controllers/listing");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

// index route
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        validateListings,
        upload.single("listing[image]"),
        wrapAsync(listingController.createListing),
    );

// new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        validateListings,
        wrapAsync(listingController.updateListing),
    )
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm),
);

module.exports = router;
