const router = require("express").Router();
const User = require("../schemas/users");

router.post("/post", async (req, res) => {
  try {
    const newuser = new User({
      username: req.body.username,
    });


    const savedUser = await newuser.save();

    res.json(savedUser);
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
