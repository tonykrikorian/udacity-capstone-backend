const axios = require("axios").default;

function translation(message = "Hello World") {
  var subscriptionKey = "96413e12fd884cefb5047ca410ab686e";
  var endpoint = "https://api.cognitive.microsofttranslator.com/";

  axios({
    baseURL: "https://api.cognitive.microsofttranslator.com",
    url: "/translate",
    method: "post",
    headers: {
      headers: {
        "Ocp-Apim-Subscription-Key": "fcd3101b613e4b3a922d55e2fa2d652e",
        "Content-type": "application/json",
      },
    },
    params: {
      "api-version": "3.0",
      from: "en",
      to: ["de", "it"],
    },
    data: [
      {
        text: "Hello",
      },
    ],
    responseType: "json",
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data, null, 4));
    })
    .catch((error) => console.log(error.message));
}

module.exports = translation;
