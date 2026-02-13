const express = require("express");
const router = express.Router();

// index route
router.get("/", (req, res) => {
    res.send("List of posts");
});
// show route
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    res.send(`Post with ID: ${postId}`);
});

router.post("/", (req, res) => {
    res.send("Create a new post");
});

module.exports = router;
