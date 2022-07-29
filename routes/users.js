const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new: true});
        res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("Invalid User Id");
  }
});

module.exports = router;
