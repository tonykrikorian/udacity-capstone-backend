const axios = require("axios").default;

async function getLanguageList() {
  const { data } = await axios.get(
    "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0"
  );
  return mapLanguageData(data);
}

function mapLanguageData(data) {
  const { translation } = data;
  const values = Object.keys(translation);
  const result = values.map((code) => {
    return { ...translation[code], code };
  });
  return result;
}
module.exports = getLanguageList;
