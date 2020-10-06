const axios = require('axios').default;

function mapLanguageData(data) {
  const { translation } = data;
  const values = Object.keys(translation);
  const result = values.map((code) => ({ ...translation[code], code }));
  return result;
}

async function getLanguageList() {
  const { data } = await axios.get(process.env.URL_AZURE_LANGUAGES_LIST);
  return mapLanguageData(data);
}

module.exports = getLanguageList;
