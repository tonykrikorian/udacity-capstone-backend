const axios = require("axios").default;
const getToken = require("./queryToken");

async function translation(
  message = "You have to select a language",
  fromLanguage = "en",
  toLanguage = ["es", "it"]
) {
  try {
    const token = await getToken();

    var endpoint = process.env.URL_AZURE_TRANSLATE;

    const result = await axios({
      baseURL: endpoint,
      url: "/translate",
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      params: {
        "api-version": "3.0",
        from: fromLanguage,
        to: toLanguage,
      },
      data: [
        {
          text: message,
        },
      ],
      responseType: "json",
    });

    const { data } = result;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = translation;
