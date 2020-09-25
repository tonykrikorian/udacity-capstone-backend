const axios = require("axios");

const getToken = async () => {
  const { data } = await axios.default.post(
    "https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken",
    {},
    {
      headers: {
        "Ocp-Apim-Subscription-Key": `${process.env.TOKEN}`,
      },
    }
  );
  return data;
};

module.exports = getToken;
