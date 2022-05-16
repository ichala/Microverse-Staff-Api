"use strict";
//Require dotenv and config
const dotenv = require("dotenv");
dotenv.config();
//Require express and config
const express = require("express");
const app = express();
const session = require("express-session");
const port = process.env.PORT; // Heroku port goes in here
const MongoStore = require("connect-mongo");
//Require mongoose and config
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.use(
  bodyParser.json({ limit: "10kb", strict: true }),
  function (err, req, res, next) {
    if (err) {
      res.status(400).send("invalid request");
    } else {
      next(err);
    }
  }
);
//Require toobusy-js and config
var toobusy = require("toobusy-js");
//Require express-rate-limit and config
const rateLimit = require("express-rate-limit");
//Require express-helmet and config
const helmet = require("helmet");
app.use(helmet());
app.use(helmet.frameguard({ action: "deny" }));
//Require cors and config in case u want restrict api to a specific domain
// var cors = require("cors");
// app.use(
//   cors({
//     origin: [
//       "htto://website.com",
//     ],
//   })
// );
//Require passport and config
app.set("trust proxy", 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20000, // limit each IP to 20000 requests per 15 min
  message: {
    code: 429,
    message: "Too many request try again after few minutes",
  },
});


app.use(limiter);

app.use(function (req, res, next) {
  if (toobusy()) {
    res.send(503, "Server is Busy right now try again later.");
  } else {
    next();
  }
});

//try to connect to db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use((err, req, res, next) => {
  // body-parser will set this to 400 if the json is in error
  if (err.status === 400)
    return res.status(err.status).json({ error: "invalid request" });
  return next(err); // if it's not a 400, let the default error handling do it.
});
//Routes
const staff = require("./Routes/Staff/staff");
app.use("/api/v1", limiter, staff);

//rest of Routes
app.get("*", (req, res) => {
  const welcome = {
    message: "Api Running check documentation at https://github.com/ichala/Microverse-Staff-Api#microverse-staff-api ",
    status: 200,
    endpoints :[
      "https://microverse-staff.herokuapp.com/api/v1/staff/all",
      "https://microverse-staff.herokuapp.com/api/v1/staff/single/6282352e3dde6c78f852627c",
      "https://microverse-staff.herokuapp.com/api/v1/staff/2",
  ]
  };
  res.status(200).json(welcome);
});
//Running Server
app.listen(process.env.PORT || port, () => {
  console.log("Backend server is running at " + port);
});
