const router = require("express").Router();
const { userRouter } = require("./userRoute");
const { newsRouter } = require("./newsRoute");

router.use("/users", userRouter); 
router.use("/news", newsRouter); 

module.exports = { router };


