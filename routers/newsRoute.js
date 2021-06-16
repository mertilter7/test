const newsRouter = require("express").Router();
const { newsController } = require("../controllers");

newsRouter.get("", newsController.getNews);
newsRouter.get("/:id", newsController.getNewsById);    
newsRouter.post("", newsController.createNews);
newsRouter.delete("/:id", newsController.deleteNews);


module.exports = { newsRouter };


