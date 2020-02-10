const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT, toData } = require("./jwt");
const router = new Router();
const User = require("../user/model");
const auth = require("./middleware");
router.post("/login", (req, res, netx) => {
  const loginCredential = req.body;
  console.log(loginCredential);
  console.log(loginCredential.hasOwnProperty("email"));
  console.log(loginCredential.hasOwnProperty("password"));
  if (
    loginCredential.hasOwnProperty("email") &&
    loginCredential.hasOwnProperty("password")
  ) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: "User with that email does not exist"
          });
        }
        // 2. use bcrypt.compareSync to check the password against the stored hash
        else if (bcrypt.compareSync(req.body.password, entity.password)) {
          // 3. if the password is correct, return a JWT with the userId of the user (user.id)
          res.send({
            jwt: toJWT({ userId: entity.id })
          });
        } else {
          res.status(400).send({
            message: "Password was incorrect"
          });
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({
          message: "Something went wrong"
        });
      });
  } else {
    res.status(400).send({
      message: "Please supply a valid email and password"
    });
  }
});
router.get("/secret-endpoint", auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`
  });
});
module.exports = router;
