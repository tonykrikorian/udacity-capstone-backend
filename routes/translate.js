const Router = require('express-promise-router');
const translationService = require('../services/translation');
const getLanguageListService = require('../services/languagesList');

const route = new Router();

route.post('/', async (req, res) => {
  const { message, fromLanguage, toLanguage } = req.body;
  const traducciones = await translationService(
    message,
    fromLanguage,
    toLanguage,
  );
  return res.send(traducciones);
});

route.get('/languages', async (req, res) => {
  const response = await getLanguageListService();
  return res.send(response);
});
module.exports = route;
