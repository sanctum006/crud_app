require("./models/db");

const express = require("express");
const bodyParser = require("body-parser");

var app = express();

const indexRouter = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server started at port 3000");
});

app.use("/", indexRouter);
