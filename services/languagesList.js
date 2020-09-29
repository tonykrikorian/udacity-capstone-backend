const axios = require("axios").default;

async function getLanguageList() {
  const { data } = await axios.get(process.env.URL_AZURE_LANGUAGES_LIST);
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
