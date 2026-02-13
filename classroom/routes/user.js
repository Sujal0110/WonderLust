const express = require("express");
const router = express.Router();

// index route
router.get("/", (req, res) => {
    res.send("List of users");
});
// show route
router.get("/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID: ${userId}`);
});

// delete route
router.delete("/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`Delete user with ID: ${userId}`);
});

router.post("/", (req, res) => {
    res.send("Create a new user");
});

module.exports = router;
