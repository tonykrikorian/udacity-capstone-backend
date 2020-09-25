const Router = require("express-promise-router");
const translationService = require("../services/translation");
const route = new Router();

route.post("/", async (req, res) => {
  const { message } = req.body;
  const traducciones = await translationService(message);
  return res.send(traducciones);
});

module.exports = route;
