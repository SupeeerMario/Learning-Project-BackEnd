const router = require("express").Router();
const User = require("../schemas/users");

router.get("/get", async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router