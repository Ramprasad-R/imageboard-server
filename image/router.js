const { Router } = require("express");
const Image = require("./model");
const auth = require("../auth/middleware");
const router = new Router();

router.post("/images", auth, async function(request, response, next) {
  try {
    const image = await Image.create(request.body);
    response.send(image);
  } catch (error) {
    next(error);
  }
});

router.get("/images", auth, async (request, response, next) => {
  try {
    const images = await Image.findAll();
    response.send(images);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
