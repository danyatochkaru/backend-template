// imports
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {settings} from "./config.json";
import compression from "compression";
import bodyParser from "body-parser";
import helmet from "helmet";
import limiter from "express-rate-limit";


// app setup
const app = express();
app
    .use(cors(settings.cors))
    .use(cookieParser(settings.keyWord))
    .use(compression())
    .use(helmet())
    .use(limiter({
        windowMs: 1000*60*10,
        max: 100,
        message: "Too many requests. Try later.",
        legacyHeaders: false,
    }))
    .use(bodyParser.json());

// routes
app.use("/api");

// start app
app.listen(settings.PORT, () => {
    console.log("Started");
});
