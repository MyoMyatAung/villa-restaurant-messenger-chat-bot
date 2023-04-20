const request = require("request");

exports.getFacebookUserName = (sender_psid) => {
  return new Promise((resolve, reject) => {
    // Send the HTTP request to the Messenger Platform
    const uri = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${FB_PAGE_TOKEN}`;
    request({
      "uri": uri,
      "method": "GET",
    }, (err, res, body) => {
      if (!err) {
        body = JSON.parse(body);
        let username = `${body.first_name} ${body.last_name}`;
        resolve(username);
      } else {
        reject("Unable to send message:" + err);
      }
    });
  })

}