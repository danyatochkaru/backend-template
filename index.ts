// imports
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {settings} from "./config.json";
import compression from "compression";
import bodyParser from "body-parser";

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
