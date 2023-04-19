require("dotenv").config();

const request = require("request");

const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;

exports.getHomePage = (req, res) => {
  return res.render("homepage.ejs");
}

exports.getFacebookUserProfile = (req, res) => {
  return res.render("profile.ejs");
}

exports.setUpUserFacebookProfile = (req, res) => {
  const data = {
    "get_started": {
      "payload": "GET_STARTED"
    },
    "persistent_menu": [
      {
        "locale": "default",
        "composer_input_disabled": false,
        "call_to_actions": [
          {
            "type": "postback",
            "title": "Talk to an agent",
            "payload": "CARE_HELP"
          },
          {
            "type": "postback",
            "title": "Outfit suggestions",
            "payload": "CURATION"
          },
          {
            "type": "web_url",
            "title": "Shop now",
            "url": "https://www.originalcoastclothing.com/",
            "webview_height_ratio": "full"
          }
        ]
      }
    ],
    "whitelisted_domains": [
      "https://www.villa-restaurant.store/"
    ]

  };
  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v6.0/me/messenger_profile",
    "qs": { "access_token": FB_PAGE_TOKEN },
    "method": "POST",
    "json": data
  }, (err, response, body) => {
    if (!err) {
      return res.status(200).json({ message: "Setup done!" })
    } else {
      return res.status(500).json({
        message: "Error from the node server."
      })
    }
  });
}