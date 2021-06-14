const userRouter = require("express").Router();
const { userController } = require("../controllers");

userRouter.get("", userController.getUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/usercreate", userController.createUser);
userRouter.delete("/userdelete/:id", userController.deleteUser);
userRouter.put("/userupdate/:id", userController.updateUser);

module.exports = { userRouter };
