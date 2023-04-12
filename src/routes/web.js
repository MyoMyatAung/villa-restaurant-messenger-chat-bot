import express from "express";
let router = express.Router();

import { getHomePage } from "../controllers/homepageController";

let initWebRoutes = (app) => {
  router.get("/", getHomePage);

  return app.use("/", router);
}

module.exports = initWebRoutes;