const express = require("express");
let router = express.Router();

const { getHomePage } = require("../controllers/homepageController");

let initWebRoutes = (app) => {
  router.get("/", getHomePage);

  return app.use("/", router);
}

module.exports = initWebRoutes;