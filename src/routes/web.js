const express = require("express");
let router = express.Router();

const { getHomePage, getFacebookUserProfile, setUpUserFacebookProfile } = require("../controllers/homepageController");
const { postWebhook, getWebhook } = require("../controllers/chatbotController");

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/greeting", getHomePage);
  router.post("/webhook", postWebhook);
  router.get("/webhook", getWebhook);
  router.get("/profile", getFacebookUserProfile);
  router.post("/set-up-user-fb-profile", setUpUserFacebookProfile)

  return app.use("/", router);
}

module.exports = initWebRoutes;