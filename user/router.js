const bcrypt = require("bcrypt");
const db = require("../db");
const User = require("./model");
const { Router } = require("express");
const router = new Router();
router.post("/user", async (req, res, next) => {
  const userCredential = req.body;
  if (userCredential.email && userCredential.password) {
    const user = {
      email: userCredential.email,
      password: bcrypt.hashSync(userCredential.password, 10)
    };
    await db.sync();
    await User.create(user);
    res.status(200).send("User successfully created");
  } else {
    res.status(400).send("Please provide both email and password");
  }
});

module.exports = router;
