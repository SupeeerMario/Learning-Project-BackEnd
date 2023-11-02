const router = require("express").Router();
const user = require("../../model/user");

router.post("/submit", async (req, res) => {
    if (req.body && req.body.username) {
        const cleanedUsername = req.body.username.toLowerCase().replace(/\s+/g, '');

        if (cleanedUsername.includes("khaled")) {
            const newUser = new user({
                username: cleanedUsername
            });

            try {
                const savedUser = await newUser.save();
                res.status(201).json(savedUser);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(400).json({ error: "Username must include 'khaled'" });
        }
    } else {
        res.status(400).json({ error: "Invalid request body" });
    }
});

module.exports = router;
