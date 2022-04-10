// imports
const express = require("express"),
    cors = require("cors"),
    cookieParser = require("cookie-parser"),
    settings = require("./config.json").settings,
    compression = require("compression"),
    bodyParser = require("body-parser"),
    helmet = require("helmet"),
    limiter = require("express-rate-limit");

// app setup
const app = express();
app
    .use(cors(settings.cors))
    .use(cookieParser(settings.keyWord))
    .use(compression())
    .use(bodyParser.json())
    .use(helmet())
    .use(limiter({
        windowMs: 1000*60*10,
        max: 100,
        message: "Too many requests. Try later.",
        legacyHeaders: false,
    }));

// routes
app.use("/api");

// start app
app.listen(settings.PORT, () => {
    console.log("Started");
});
