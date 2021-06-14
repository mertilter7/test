const express = require("express");
const cors = require("cors");
const { router } = require("./routers");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);


app.listen(3000);

