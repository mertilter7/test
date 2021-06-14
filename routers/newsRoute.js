const newsRouter = require("express").Router();
const { newsController } = require("../controllers");

newsRouter.get("", newsController.getNews);
newsRouter.get("/:id", newsController.getNewsById);
newsRouter.post("/newscreate", newsController.createNews);
newsRouter.delete("/newsdelete/:id", newsController.deleteNews);


module.exports = { newsRouter };


