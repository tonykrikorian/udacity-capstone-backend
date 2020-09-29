const axios = require("axios");

const getToken = async () => {
  const { data } = await axios.default.post(
    process.env.URL_TOKEN_AZURE,
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
