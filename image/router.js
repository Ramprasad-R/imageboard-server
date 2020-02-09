const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.post("/images", async function(request, response, next) {
  try {
    const image = await Image.create(request.body);
    response.send(image);
  } catch (error) {
    next(error);
  }
});

router.get("/images", async (request, response, next) => {
  try {
    const images = await Image.findAll();
    response.send(images);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
