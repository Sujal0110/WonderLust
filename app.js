const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const listingSchema = require("./schema");

const app = express();
const port = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const validateListings = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        console.log(errMsg);
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

app.get("/", (req, res) => {
    res.send("hello");
});

//index route
app.get(
    "/listings",
    wrapAsync(async (req, res) => {
        let allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    }),
);

//new route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

//create route
app.post(
    "/listings",
    validateListings,
    wrapAsync(async (req, res, next) => {
        let newListing = new Listing(req.body.listings);
        await newListing.save();
        res.redirect("/listings");
    }),
);

//show route
app.get(
    "/listings/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        res.render("listings/show.ejs", { listing });
    }),
);

// edit route
app.get(
    "/listings/:id/edit",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        res.render("listings/edit.ejs", { listing });
    }),
);

// update route
app.put(
    "/listings/:id",
    validateListings,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        res.redirect(`/listings/${id}`);
    }),
);

//delete route
app.delete(
    "/listings/:id",
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        res.redirect("/listings");
    }),
);

// AFTER all routes
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { err });
    // res.status(statusCode).send(message);
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
