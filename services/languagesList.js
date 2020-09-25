const axios = require("axios").default;

async function getLanguageList() {
  const { data } = axios.get(
    "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0"
  );
  return data;
}
module.exports = getLanguageList;
