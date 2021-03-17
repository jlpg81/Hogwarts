const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
// const dotEnv = require("dotenv").config();

const router = require("./router");

module.exports = (port) => {
  const app = express();

  if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    console.log("morgan Enabled...");
  }

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(router);

  const server = app.listen(port, () =>
    console.log(`App listening on port ${port} 🚀🕺🏻🎯🚀`)
  );

  return { app, server };
};
