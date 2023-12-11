"use strict";

require("dotenv").config();

const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");

const setupServer = async () => {
  // get port
  const port = process.env.PORT || 8080;

  // setup express pipeline
  let app = express();
  app.use(logger("dev"));
  app.engine("pug", require("pug").__express);
  app.set("views", __dirname);
  app.use(express.static(path.join(__dirname, "../../public")));

  // setup session support
  app.store = session({
    name: "session",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
    },
  });
  app.use(app.store);

  // finish with body parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // import Routes
  // require("./api/index.cjs")(app);

  // get the base page
  app.get("*", (req, res) => {
    res.render("base.pug", {});
  });

  // start the web server
  const server = require("http").createServer(app);
  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

setupServer();
