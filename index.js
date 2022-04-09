// imports
const express = require("express"),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  settings = require("./config.json").settings,
  compression = require("compression"),
  bodyParser = require("body-parser");

// app setup
const app = express();
app
  .use(cors(settings.cors))
  .use(cookieParser(settings.keyWord))
  .use(compression())
  .use(bodyParser.json());

// routes
app.use("/api");

// start app
app.listen(settings.PORT, () => {
  console.log("Started");
});
